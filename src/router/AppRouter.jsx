import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from '../auth'
import { CabonortePage } from '../cabonorte'
import { useAuthStore } from "../hooks"

export const AppRouter = () => {

  const { status, checkAuthToken } = useAuthStore();  
  //const authStatus = 'not-authenticated';
    //const authStatus = 'not-authenticated';

  useEffect(() => {
    checkAuthToken();
  }, [])
  if ( status === 'checking') {
    return (
      <h3>Cargando...</h3>
    )
  }

  return (
    <Routes>
        {
            (status === 'not-authenticated')
                ? <Route path="/auth/*" element={<LoginPage />} />
                : <Route path="/*" element={<CabonortePage />} />
        }
    
        <Route path="/*" element={<Navigate to="/auth/login" />} />

    </Routes>
  )
}
