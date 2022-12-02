import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from '../auth'
import { CabonortePage } from '../cabonorte'
export const AppRouter = () => {

    const authStatus = 'not-authenticated';
    //const authStatus = 'authenticated';
  return (
    <Routes>
        {
            (authStatus === 'not-authenticated')
                ? <Route path="/auth/*" element={<LoginPage />} />
                : <Route path="/*" element={<CabonortePage />} />
        }
    
        <Route path="/*" element={<Navigate to="/auth/login" />} />

    </Routes>
  )
}
