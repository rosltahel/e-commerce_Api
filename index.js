const express = require("express");
const cors = require("cors");
const YAML = require("yamljs");
const swaggerUi = require("swagger-ui-express");

const app = express();
app.use(cors());
app.use(express.json());

// Load OpenAPI spec
const openapi = YAML.load("./openapi.yaml");
app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapi));

// Mock data
const products = [
  { id: "prd_123", name: "Keyboard", price: 49.99, currency: "USD", inStock: true },
  { id: "prd_456", name: "Mouse", price: 24.99, currency: "USD", inStock: true },
];
const cities = [
  { id: 1, name: "Amman", countryCode: "JO", district: "Capital", population: 4000000 },
  { id: 2, name: "Fort Worth", countryCode: "US", district: "Texas", population: 935000 },
];
const orders = [
  { id: "ord_001", status: "pending", items: [{ productId: "prd_123", quantity: 2 }], total: 99.98, createdAt: new Date().toISOString() }
];

// API routes (must match the spec basePath: /api/v1)
const router = express.Router();

// Orders
router.get("/orders", (req, res) => res.json(orders));
router.post("/orders", (req, res) => {
  const body = req.body || {};
  const next = {
    id: `ord_${String(orders.length + 1).padStart(3, "0")}`,
    status: "pending",
    items: body.items ?? [],
    total: 0 + (body.items || []).reduce((s, it) => {
      const p = products.find(x => x.id === it.productId);
      return s + (p ? p.price * (it.quantity || 1) : 0);
    }, 0),
    createdAt: new Date().toISOString()
  };
  orders.push(next);
  res.status(201).json(next);
});
router.get("/orders/:id", (req, res) => {
  const o = orders.find(x => x.id === req.params.id);
  if (!o) return res.status(404).json({ message: "Order not found", code: "NOT_FOUND" });
  res.json(o);
});

// Products
router.get("/products", (req, res) => {
  const q = (req.query.q || "").toLowerCase();
  const filtered = q ? products.filter(p => p.name.toLowerCase().includes(q)) : products;
  res.json(filtered);
});
router.get("/products/:id", (req, res) => {
  const p = products.find(x => x.id === req.params.id);
  if (!p) return res.status(404).json({ message: "Product not found", code: "NOT_FOUND" });
  res.json(p);
});

// Cities
router.get("/cities", (req, res) => res.json(cities));
router.post("/cities", (req, res) => {
  const body = req.body;
  const next = { id: cities.length + 1, ...body };
  cities.push(next);
  res.status(201).json(next);
});
router.get("/cities/:id", (req, res) => {
  const c = cities.find(x => x.id === Number(req.params.id));
  if (!c) return res.status(404).json({ message: "City not found", code: "NOT_FOUND" });
  res.json(c);
});
router.put("/cities/:id", (req, res) => {
  const i = cities.findIndex(x => x.id === Number(req.params.id));
  if (i === -1) return res.status(404).json({ message: "City not found", code: "NOT_FOUND" });
  cities[i] = { ...cities[i], ...req.body };
  res.json(cities[i]);
});
router.delete("/cities/:id", (req, res) => {
  const i = cities.findIndex(x => x.id === Number(req.params.id));
  if (i === -1) return res.status(404).json({ message: "City not found", code: "NOT_FOUND" });
  cities.splice(i, 1);
  res.status(204).send();
});

app.use("/api/v1", router);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}/api/v1`);
  console.log(`Docs at       http://localhost:${PORT}/docs`);
});
