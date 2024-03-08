import { Link, Outlet, Navigate } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'

export default function MainPage() {
  
  return (
    <div>
      <NavBar />
      <Navigate to='shop'></Navigate>
      <Outlet />
    </div>
  )
}