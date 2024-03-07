import { Link, Outlet, Navigate } from 'react-router-dom'

export default function MainPage() {
  
  return (
    <div>
      <h1>Hello from Home Page</h1>
      <Link to='/'>Goto Shop</Link>
      <Navigate to='shop'></Navigate>
      <Outlet />
    </div>
  )
}