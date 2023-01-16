import { useState, useEffect } from 'react';
import { useAuthStore } from '../../hooks';

export const Navbar = () => {

  const {startLogout, user} = useAuthStore();

  return (
    <nav className="navbar navbar-dark bg-dark justify-content-between">
      <a className="navbar-brand" href="#">
        <i className="fas fa-calendar-alt"></i>
        &nbsp;
        { user.name }
      </a>
      <ul className="nav mr-auto d-flex justify-content-center text-center">
        <li className="nav-item">
          <a className="nav-link" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Servicios</a>
        </li>
      </ul>
      <button 
        className="btn btn-outline-danger"
        onClick={ startLogout }
      >
        <i className="fas fa-sign-out-alt"></i>
        &nbsp;
        Cerrar sesión
      </button>
    </nav>
  );
}