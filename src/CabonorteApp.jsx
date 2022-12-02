import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';

export const CabonorteApp = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}
