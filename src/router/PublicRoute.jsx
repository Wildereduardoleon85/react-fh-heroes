import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth'

export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext)

  if (!logged) {
    return children
  }

  return <Navigate to='/marvel' />
}
