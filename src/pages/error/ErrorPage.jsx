import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return(
    <div className='w-full h-screen grid place-items-center text-5xl'>
      <div className='grid place-items-center gap-3'>
        <p>This page doesn't exist</p>
        <Link to='shop'>
          <span className='text-blue-400'>Click here to go back to Home Page</span>
        </Link>
      </div>
    </div>
  )
}