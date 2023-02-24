import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuthStore, useForm } from '../../hooks';
import './LoginPage.css';
import {Navbar, Footer} from "../../ui"

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: '',
}


export const LoginPage = () => {

    const { startLogin, errorMessage } = useAuthStore()

    const { loginEmail, loginPassword, onInputChange:onLoginInputChange } = useForm(loginFormFields);

    const loginSubmit = ( event ) => {
        event.preventDefault();
        startLogin({email: loginEmail, password: loginPassword})
        
    }

    useEffect(() => {
        if ( errorMessage !== undefined ) {
            Swal.fire('Error en la autenticación', errorMessage, 'error')
        } 
    }, [errorMessage])
    
    return (
        <>
            <Navbar />
            <div className="container login-container">
                <div className="row">
                    <div className="col login-form-1">
                        <h3>Ingreso</h3>
                        <form onSubmit={ loginSubmit }>
                            <div className="form-group mb-2">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Correo"
                                    name="loginEmail"
                                    value={ loginEmail }
                                    onChange={ onLoginInputChange }
                                />
                            </div>
                            <div className="form-group mb-2">
                                <input
                                    type="password"
                                    className="form-control"                                
                                    placeholder="Contraseña"
                                    name="loginPassword"
                                    value={ loginPassword }
                                    onChange={ onLoginInputChange }
                                />
                            </div>
                            <div className="form-group mb-2 text-center">
                                <input 
                                    type="submit"
                                    className="btnSubmit"
                                    value="Login" 
                                />
                            </div>
                            <div className="form-group text-center">
                            <Link
                                to="/auth/register"
                                className="link login__link"
                            >
                                Crear un nuevo usuario
                            </Link>
                            <br/>
                            <Link
                                to="/"
                                className="link login__link"
                            >
                                Volver
                            </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}