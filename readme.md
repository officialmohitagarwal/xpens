# XPens – Smart Expense Tracker

XPens is a modern full-stack expense management application built with React, Node.js, Express, MongoDB, and JWT Authentication.

It helps users track expenses, visualize spending patterns, manage categories, and gain insights through an interactive dashboard.

---

## Live Demo

Frontend: https://xpens-teal.vercel.app/

Backend API: https://xpens-7qvp.onrender.com/api

### Demo Credentials

Email: [demo@xpens.com](mailto:demo@xpens.com)

Password: demo@246

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Persistent Login Sessions
* Logout Functionality
* Change Password

### Expense Management

* Add Expense
* Edit Expense
* Delete Expense
* Search Expenses
* Filter by Category
* Expense History
* User-Specific Expense Data

### Dashboard & Analytics

* Total Expenses Overview
* Monthly Expense Summary
* Category Distribution Chart
* Monthly Trend Analysis
* Recent Transactions
* Real-Time Statistics

### Additional Features

* Responsive Design
* Mobile Friendly Sidebar
* Dark Modern UI
* Toast Notifications
* Form Validation
* Modal-Based Expense Creation
* Secure Password Hashing using bcrypt

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* Recharts
* Axios
* React Hook Form
* React Hot Toast
* Framer Motion
* Lucide React

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## Project Structure

```bash
XPENS
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── layouts
│   │   ├── context
│   │   ├── services
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── server.js
│
└── README.md
```

---


---

## Installation

### Clone Repository

```bash
git clone https://github.com/officialmohitagarwal/xpens.git

cd xpens
```

### Backend Setup

```bash
cd server

npm install

npm run dev
```

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

## API Endpoints

### Authentication

| Method | Endpoint                  | Description      |
| ------ | ------------------------- | ---------------- |
| POST   | /api/auth/register        | Register User    |
| POST   | /api/auth/login           | Login User       |
| GET    | /api/auth/profile         | Get User Profile |
| PUT    | /api/auth/change-password | Change Password  |

### Expenses

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| GET    | /api/expenses     | Get All Expenses   |
| GET    | /api/expenses/:id | Get Single Expense |
| POST   | /api/expenses     | Create Expense     |
| PUT    | /api/expenses/:id | Update Expense     |
| DELETE | /api/expenses/:id | Delete Expense     |

---



---

## Future Enhancements

* Dark / Light Theme Toggle
* Expense Export to CSV
* Monthly Budget Planning
* Expense Reminders
* Recurring Expenses
* Multi-Currency Support
* Email Notifications
* OCR Receipt Scanning

---

## Author

Mohit Agarwal

Full Stack Developer

LinkedIn: https://linkedin.com/in/mohitagarwal2307

GitHub: https://github.com/officialmohitagarwal


