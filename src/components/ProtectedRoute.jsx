import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({children, isAuth=false}){
  if(!isAuth) return <Navigate to="/login" replace />
  return children
}
