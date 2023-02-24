import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../hooks';
import logo from '../../assets/logo.png';

export const Navbar = () => {

  const {startLogout, user, status, checkAuthToken} = useAuthStore();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthToken();
  }, [])

  if ( status === 'checking') {
    return (
      <h3>Cargando...</h3>
    )
  }
  
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };


    const handleClick = () => {
      return navigate(`/auth/*`);
    }

  return (
    <nav className="navbar navbar-expand-md navbar-color justify-content-between text-center">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleMenuClick}
      >
        <span className="navbar-toggler-icon">
          <i className="fas fa-bars"></i>
        </span>
      </button>
      <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`}>
        <ul className="nav navbar-center mx-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contacto
            </a>
          </li>
        </ul>
      </div>
      {user.name && <span className="letra-home">hola, {user.name}!  </span>}
      {user.name ? (
        <button className="btn btn-outline-danger" onClick={startLogout}>
          <i className="fas fa-sign-out-alt"></i>
          &nbsp;Cerrar sesión
        </button>
      ) : (
        <button className="btn btn-outline-success" onClick={handleClick}>
          <i className="fas fa-user"></i>
          &nbsp;Login
        </button>
      )}
    </nav>
  );
}