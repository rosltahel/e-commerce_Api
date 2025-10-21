# 🛍️ Swagger API Project



<img width="1138" height="817" alt="لقطة شاشة 2025-10-21 155358" src="https://github.com/user-attachments/assets/26903b3a-e29d-458a-9590-1b7e221aef71" />

# 🧠 Swagger API Practice Project

## 📖 Overview
This project is a **practice API** built to explore and understand how **Swagger (OpenAPI)** works.  
It demonstrates how to document REST APIs, visualize them using **Swagger UI**, and test endpoints interactively.

---

## 🚀 What I Learned
✅ How to create an OpenAPI (YAML) specification  
✅ How to serve Swagger documentation in a Node.js + Express app  
✅ How to test API endpoints directly from the Swagger UI  
✅ How to organize routes and schemas for clean documentation  

---

## ⚙️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Backend | Node.js, Express |
| API Docs | Swagger UI (OpenAPI 3.0) |
| Format | YAML, JSON |
| Tools | VS Code, npm, Git |

---

## 🧩 Project Description
This API simulates a simple e-commerce system to practice documenting endpoints with Swagger UI.  
It includes endpoints for:
- **Products**
- **Orders**
- **Cities**

---

## 💻 How to Run the Project

```bash
# Clone this repository
git clone https://github.com/rosltahel/e-commerce_Api.git
cd e-commerce_Api

# Install dependencies
npm install

# Start the server
node index.js



## 🚀 Features
✅ Retrieve, create, update, and delete **products, orders, and cities**  
✅ Interactive Swagger documentation at `/docs`  
✅ JSON-based mock data — easy to expand  
✅ Ready for deployment or database connection  

---

## ⚙️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Backend | Node.js, Express |
| API Docs | Swagger UI (OpenAPI 3.0) |
| Format | JSON, YAML |
| Tools | VS Code, Git, npm |

---

## 🧠 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/v1/products` | Get all products |
| GET | `/api/v1/products/{id}` | Get product by ID |
| GET | `/api/v1/orders` | List all orders |
| POST | `/api/v1/orders` | Create new order |
| GET | `/api/v1/cities` | Get all cities |
| POST | `/api/v1/cities` | Create a city |
| PUT | `/api/v1/cities/{id}` | Update a city |
| DELETE | `/api/v1/cities/{id}` | Delete a city |

---

## 💻 Installation

```bash
# Clone the repository
git clone https://github.com/rosltahel/e-commerce_Api.git
cd e-commerce_Api

# Install dependencies
npm install

# Run the project
node index.js
