import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import { LoginPage, RegisterPage } from '../auth'
import { CabonortePage, ProductoPage } from '../cabonorte'
import { useAuthStore } from "../hooks"

export const AppRouter = () => {

  const { status, checkAuthToken } = useAuthStore();  

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
            ? (
                <>
                  <Route path="/" element={<CabonortePage />} />
                  <Route path="/auth/login" element={<LoginPage />} />
                  <Route path="/auth/register" element={<RegisterPage />} />
                  <Route path="/product/:id" element={<ProductoPage />} />
                  <Route path="/*" element={<Navigate to="/auth/login" />} />
                </>
              )
            : (
              <>
                <Route path="/" element={<CabonortePage />} />
                <Route path="/*" element={<Navigate to="/" />} />
              </>
              )
        }
    

    </Routes>
  )
}
