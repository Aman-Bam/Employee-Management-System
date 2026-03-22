import React, { useEffect, useState, useContext } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from './context/AuthProvider.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import './App.css'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { setLocalStorage } from './utils/LocalStorages.jsx'
import TaskList from './other/TaskList.jsx'

export const App = () => {


  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === authData?.userData?.admin?.email && password === authData?.userData?.admin?.password) {
      const adminUser = { ...authData.userData.admin, role: "admin" };
      setUser(adminUser);
      localStorage.setItem('loggedInUser', JSON.stringify(adminUser));
      navigate('/admin');
    }

    else if (authData?.userData?.employees?.find(emp => emp.email === email && emp.password === password)) {
      const employee = authData?.userData?.employees?.find(emp => emp.email === email && emp.password === password);
      const employeeUser = { ...employee, role: "employee" };
      setUser(employeeUser);
      localStorage.setItem('loggedInUser', JSON.stringify(employeeUser));
      navigate('/employee');
    }

    else {
      alert("Invalid credentials")
    }
  }

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Navigate 
            to={user ? (user.role === 'admin' ? '/admin' : '/employee') : '/login'} 
            replace 
          />
        } 
      />
      
      <Route 
        path="/login" 
        element={
          !user 
            ? <Login handleLogin={handleLogin} /> 
            : <Navigate to={user.role === 'admin' ? '/admin' : '/employee'} replace />
        } 
      />

      <Route element={<ProtectedRoute user={user} allowedRole="admin" />}>
        <Route path="/admin" element={<AdminDashboard changeUser={setUser} data={user} />} />
      </Route>

      <Route element={<ProtectedRoute user={user} allowedRole="employee" />}>
        <Route path="/employee" element={<EmployeeDashboard changeUser={setUser} data={user} />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}