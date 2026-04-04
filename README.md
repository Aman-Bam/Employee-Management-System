<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />

  <br />
  <br />

  <h1>🚀 Employment Management System</h1>
  <p>A modern, full-stack Role-Based Employee and Task Management Dashboard built with the MERN stack and Tailwind CSS v4.</p>
  
</div>

## 📖 About the Project

The **Employment Management System** is a streamlined, scalable web application designed to help businesses, managers, and employees keep track of their daily tasks and overall productivity in an organized manner. 

Recently upgraded from a frontend-only local storage prototype to a fully-featured **MERN Stack** (MongoDB, Express.js, React, Node.js) application, it features secure **JWT-based Authentication** and a clean, responsive interface powered by **Tailwind CSS v4**. It incorporates robust **Role-Based Access Control (RBAC)**, ensuring that Admins have the power to create and assign tasks, while Employees can securely manage, accept, or complete their specific to-do lists.

---

## ✨ Key Features

### 🛡️ Role-Based Architecture
- **Admin Role:** Access to a comprehensive dashboard to monitor overall employee progress, create new tasks, assign them to specific employees, and view aggregated metrics.
- **Employee Role:** Secure login leading to a personalized dashboard containing only user-specific tasks and dynamic status updates.

### 📝 Task Management
- **Create & Assign Tasks:** Admins can effortlessly create new tasks with titles, detailed descriptions, categories, and deadlines.
- **Task Lifecycles:** Employees can accept, complete, or fail tasks, which dynamically update the database in real-time.
- **Task Tracking:** Employees can view their assigned task lists directly grouped by current statuses.

### 🔐 Secure Backend
- **Authentication:** JWT (JSON Web Tokens) based secure authentication with bcrypt password hashing.
- **API Protection:** Protected Express routes ensure that only authorized users can read or mutate sensitive company data.
- **Scalable Database:** Uses MongoDB with Mongoose ODM for structured, reliable data handling.

### 🎨 Beautiful UI/UX
- **Modern Design:** Built from the ground up with a custom dark-mode design system using Tailwind CSS v4 and `lucide-react` icons.
- **Responsive:** Fluid layouts that work perfectly on desktops, tablets, and mobile devices.
- **Lightning Fast Routing:** Instant page transitions using React Router DOM v7.

---

## 🛠️ Technology Stack

### Frontend
- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** [React Router DOM v7](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

### Backend
- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
- **Security:** `bcrypt` (Hashing) & `jsonwebtoken` (Auth)
- **Middleware:** `cors`, `dotenv`

---

## 🚀 Getting Started

To run this project locally, follow these steps carefully:

### Prerequisites
Make sure you have installed on your machine:
- [Node.js](https://nodejs.org/) (version 18+ recommended)
- [MongoDB](https://www.mongodb.com/) (Local installation or a MongoDB Atlas URI)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aman-Bam/EmployeeManagementSystems.git
   cd EmployeeManagementSystems
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   *Create a `.env` file in the `backend` directory and add the following variables:*
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_jwt_key
   ```
   *Start the backend server:*
   ```bash
   npm run dev
   ```

3. **Frontend Setup**
   *Open a new terminal window/tab:*
   ```bash
   cd Frontend
   npm install
   ```
   *Start the Vite development server:*
   ```bash
   npm run dev
   ```

4. **Access the App**
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📂 Project Structure Overview

```text
EmploymentSystem/
├── Frontend/                   # React Frontend Application
│   ├── src/
│   │   ├── components/         # Reusable UI components (Dashboard, Tasks, Auth)
│   │   ├── context/            # React Context Providers (Auth, Data)
│   │   ├── utils/              # API and generic utility functions
│   │   ├── App.jsx             # Main routing component
│   │   └── main.jsx            # React root component
│   └── package.json            # Frontend dependencies
│
├── backend/                    # Node.js + Express Backend Setup
│   ├── controllers/            # Route logic (Auth, Tasks)
│   ├── models/                 # Mongoose database schemas
│   ├── routes/                 # Express API routing definitions
│   ├── middlewares/            # JWT validation filters
│   ├── server.js               # Express Server Entry Point
│   └── package.json            # Backend dependencies
│
└── README.md                   # Project Documentation
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check the [issues page](https://github.com/Aman-Bam/EmployeeManagementSystems/issues) if you want to contribute.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. This project is intended for educational and portfolio purposes.

---
<div align="center">
  <i>Built with ❤️ using the MERN stack & Tailwind CSS.</i>
</div>
