import { useContext, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth'

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext)
  const { pathname, search } = useLocation()

  useEffect(() => {
    localStorage.setItem('lastPath', `${pathname}${search}`)
  }, [pathname, search])

  if (logged) {
    return children
  }

  return <Navigate to='/login' />
}
