import { CssBaseline } from '@mui/material'
import './App.css'
import { useState } from 'react'
import { AppBarMenu } from './components/layout/AppBarMenu';
import { SideNav } from './components/layout/SideNav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginForm } from './components/auth/LoginForm';
import Swal from 'sweetalert2';

function App() {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const handleLogout = () => {
    Swal.fire({
      title: "Logout",
      text: "Estas seguro de cerrar sesión",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si"
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '/login'
      
      }
    });
   

  }

  return (
    <Router>
      <CssBaseline />
      <AppBarMenu onMenuClick={handleDrawerToggle} onLogout={handleLogout}></AppBarMenu>
      <SideNav open={drawerOpen} onClose={handleDrawerToggle}></SideNav>

      <Routes>
        <Route path='/login' element={<LoginForm onLoginSuccess={() => window.location.href = 'www.google.com.gt'} />} />
      </Routes>
    </Router>






  )
}

export default App
