import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

const DefaultLayout = () => {
  const {user, token} = useStateContext;
  if(!token){
    return <Navigate to={'/login'} />
  }
  return (
    <div id='defaultLayout'>
      <div className='content'>
        <header>
          <div>
              Header
          </div>
          <div>
            User info
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DefaultLayout