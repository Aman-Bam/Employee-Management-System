<div align="center">
  <h1>🚀 Employment Management System</h1>
  <p>A modern, role-based employee and task management dashboard built with React and Tailwind CSS.</p>

  [![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://employment-system-zeta.vercel.app/)
  [![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](#)
  [![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)](#)
  [![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](#)
</div>

---

## 🔗 Live Application
**Experience the live app:** [https://employment-system-zeta.vercel.app/](https://employment-system-zeta.vercel.app/)

---

## 📖 About the Project

The **Employment Management System** is a streamlined web application designed to help businesses, managers, and employees keep track of their daily tasks and overall productivity.

The application uses state-of-the-art web technologies and features a clean, responsive interface powered by **Tailwind CSS**. It incorporates **Role-Based Access Control (RBAC)**, ensuring that Admins have the power to create and assign tasks, while Employees can manage and track their specific to-do lists.

---

## ✨ Key Features

### 🛡️ Role-Based Architecture
- **Admin Role:** Access to a comprehensive dashboard to monitor overall progress, create new tasks, and assign them to specific employees.
- **Employee Role:** Secure login leading to a personalized dashboard containing only user-specific tasks and updates.

### 📝 Task Management
- **Create Tasks:** Admins can effortlessly create new tasks with titles, descriptions, categories, and deadlines.
- **Real-Time Updates:** Tasks dynamically reflect on the employee's dashboard instantly upon creation.
- **Task Tracking:** Employees can view their assigned task lists and manage their day-to-day operations.

### 🔐 Secure & Fast
- **Local Storage Authentication:** Simulates a secure backend using optimized Local Storage paradigms for persistent sessions without lag.
- **Lightning Fast Routing:** Instant page transitions using React Router v7.

### 🎨 Beautiful UI/UX
- **Modern Design:** Built from the ground up with a custom design system using Tailwind CSS and `lucide-react` icons.
- **Responsive:** Fluid layouts that work perfectly on desktops, tablets, and mobile devices.

---

## 🛠️ Technology Stack

- **Frontend Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** [React Router DOM v7](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **State/Database Simulation:** Browser Local Storage API

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18+ recommended) installed on your machine.

### Installation

1. **Clone the repository** (or download the source code)
   ```bash
   git clone https://github.com/Aman-Bam/EmployeeManagementSystems.git
   ```

2. **Navigate into the project directory**
   ```bash
   cd EmploymentSystem
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open the App**
   Open `http://localhost:5173` in your browser.

---

## 📂 Project Structure Overview

```text
EmploymentSystem/
├── src/
│   ├── components/
│   │   ├── Dashboard/          # Admin and Employee dashboard views
│   │   ├── ProtectedRoute.jsx  # Authentication routing logic
│   │   └── ...                 # Other reusable UI components (Buttons, Inputs)
│   ├── utils/
│   │   └── LocalStorages.jsx   # Local storage auth & initial state simulation
│   ├── App.jsx                 # Application root & Routing structure
│   └── main.jsx                # React DOM entry point
├── public/                     # Static assets
├── package.json                # Dependencies and project metadata
└── tailwind.config.js / css    # Tailwind setup files
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## 📄 License

This project is intended for educational and portfolio purposes.

---
<div align="center">
  <i>Built with ❤️ using React & Tailwind.</i>
</div>
