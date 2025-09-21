import { CssBaseline } from '@mui/material'
import './App.css'
import { useState } from 'react'
import { AppBarMenu } from './components/layout/AppBarMenu';
import { SideNav } from './components/layout/SideNav';

function App() {
  
const [drawerOpen, setDrawerOpen] = useState(false);
const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

const handleLogout = () => {
  console.log('Sesion cerrada');
}

  return (
    <>
     <CssBaseline/>
     <AppBarMenu onMenuClick={handleDrawerToggle} onLogout={handleLogout}></AppBarMenu>
      <SideNav open={drawerOpen} onClose={handleDrawerToggle}></SideNav>
    </>
  )
}

export default App
