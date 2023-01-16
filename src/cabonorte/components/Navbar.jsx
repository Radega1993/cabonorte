import { useState, useEffect } from 'react';

export const Navbar = () => {

  return (
    <nav className="navbar navbar-dark bg-dark justify-content-between">
      <a className="navbar-brand" href="#">
        <i className="fas fa-calendar-alt"></i>
        &nbsp;
        Raül
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
      <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt"></i>
        &nbsp;
        Cerrar sesión
      </button>
    </nav>
  );
}