# PaintNibo — Modern E-Commerce Platform

PaintNibo is a production-ready, highly scalable full-stack e-commerce web application engineered using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). The application delivers a smooth, intuitive user experience paired with a robust backend architecture engineered to manage granular database filtering, secure state-based authentication, and transaction handling.

---

## 🚀 Key Engineering & Architecture Highlights

* **Granular Database Filtering:** Implements optimized server-side query handling for real-time elastic search bar indices and dynamic category multi-filtering workflows across complex product schemas.
* **Production-Grade Authentication:** Features encrypted session-handling pipelines utilizing modern JSON Web Tokens (JWT) or secure session middleware to safeguard sensitive customer profiles and user accounts.
* **Comprehensive Cart & Transaction Handling:** Built-in modular state management to track persistent shopping carts, automated inventory/stock reconciliation, and streamlined data payload handling for checkout processing.
* **Highly Responsive UI Architecture:** Implements a performant, modular frontend ecosystem utilizing React component structuring paired with modern Utility-First CSS styling (Tailwind CSS / PostCSS) for absolute visual fluidness across desktop and mobile screens.
* **Scalable Data Seeding Pipeline:** Built with automated utility scripts (`seed.js`) to securely load, mock, and populate database collections with validated product matrices during staging configurations.

---

## 🛠️ Tech Stack & Dependencies

### Frontend Core
* **Library:** React.js (Vite Build Pipeline)
* **Styling:** Tailwind CSS, PostCSS

### Backend Infrastructure
* **Runtime environment:** Node.js
* **Framework:** Express.js
* **Database engine:** MongoDB (Mongoose ODM layer)

---

## 📂 Project Structure & Module Overview

The application follows an enterprise-level MVC/modular separation pattern to enforce separation of concerns:

```text
├── 📂 config/          # Centralized Database and Environment Variable Initializations
├── 📂 controllers/     # Modular Request/Response Business Logic Orchestrators
├── 📂 data/            # Static Asset Definitions and Core Mock Data Matrices
├── 📂 middleware/       # JWT Validations, Route Handlers, and Global Error Catchers
├── 📂 models/           # Structured Mongoose Schemas enforcing relational data validation
├── 📂 routes/           # RESTful API Route mapping decoupled by domain resource
├── 📂 src/              # Frontend Client Root React Architecture components
├── 📄 seed.js           # Automated script for seeding mock database schemas
└── 📄 server.js         # Centralized HTTP Application Entrypoint & Middleware pipeline
```

---

## ⚙️ Local Development & Setup Strategy

### 1. Prerequisites
Ensure you have **Node.js** and **MongoDB** installed locally on your operating machine.

### 2. Configure Environment Variables
Create a file named `.env` in your project root using the provided `.env.example` blueprint:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secure_jwt_token_secret
```

### 3. Install Dependencies
Run the command below to install all necessary production and development modules:

```bash
npm install
```

### 4. Seed the Database
Populate your local database collection with initial mock datasets using the automated seeding architecture:

```bash
node seed.js
```

### 5. Launch the Local Production Environment
Run the concurrent development environment pipeline:

```bash
# Start backend API layer and frontend client application concurrently
npm run dev
```
