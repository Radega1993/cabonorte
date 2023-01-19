import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../hooks';
import logo from '../../assets/logo.png';

export const Navbar = () => {

  const {startLogout, user, status, checkAuthToken} = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthToken();
  }, [])

  if ( status === 'checking') {
    return (
      <h3>Cargando...</h3>
    )
  }

    const handleClick = () => {
      return navigate(`/auth/*`);
    }

  return (
    <nav className="navbar navbar-color justify-content-between text-center">
      <a className="navbar-brand" href="#">
      <img src={logo} alt="Logo" className='logo' />
        
      </a>
      <ul className="nav navbar-center">
        <li className="nav-item">
          <a className="nav-link" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
      </ul>

      {user.name && <span>{user.name}</span>}
      {user.name ? (
        <button 
          className="btn btn-outline-danger"
          onClick={ startLogout }
        >
          <i className="fas fa-sign-out-alt"></i>
          &nbsp;
          Cerrar sesión
        </button>
      ) : (
        <button 
          className="btn btn-outline-success"
          onClick={ handleClick }
        >
          <i className="fas fa-user"></i>
          &nbsp;
          Login
        </button>
      )}
      
    </nav>
  );
}