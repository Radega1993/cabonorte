import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuthStore, useForm } from '../../hooks';
import './LoginPage.css';
import {Navbar, Footer} from "../../ui"


const registerFormFields = {
    name: '',
    surname: '',
    email: '',
    password: '',
    password2: '',
    telefono: '',
    via: '',
    calle: '',
    numero: '',
    escalera: '',
    planta: '',
    puerta: '',
    poblacion: '',
    pais: '',
}


export const RegisterPage = () => {

    const { errorMessage, startRegister } = useAuthStore()

    const { 
        name,
        surname,
        email,
        password,
        password2,
        telefono,
        via,
        calle,
        numero,
        escalera,
        planta,
        puerta,
        poblacion,
        pais,
        onInputChange:onRegisterInputChange 
    } = useForm(registerFormFields);


    const registerSubmit = ( event ) => {
        event.preventDefault();
        if (password !== password2 ) {
            Swal.fire('Error en registro', 'Contraseñas no son iguales', 'error');
            return;
        }

        startRegister({
            name, 
            surname, 
            email, 
            password, 
            telefono,
            via,
            calle,
            numero,
            escalera,
            planta,
            puerta,
            poblacion,
            pais });
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
                    <div className="col login-form-2">
                        <h3>Registro</h3>
                        <form onSubmit={ registerSubmit }>
                            <div className="row">
                                <div className="col-md-6 form-group mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre"
                                        name="name"
                                        value={ name }
                                        onChange={ onRegisterInputChange }
                                    />
                                </div>

                                <div className="col-md-6 form-group mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Apellido"
                                        name="surname"
                                        value={ surname }
                                        onChange={ onRegisterInputChange }
                                    />
                                </div>
                            </div>
                            <div className="form-group mb-2">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo"
                                    name="email"
                                    value={ email }
                                    onChange={ onRegisterInputChange }
                                />
                            </div>
                            
                            <div className="row">
                                <div className="col-md-6 form-group mb-2">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Contraseña" 
                                        name="password"
                                        value={ password }
                                        onChange={ onRegisterInputChange }
                                    />
                                </div>


                                <div className="col-md-6 form-group mb-2">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Repita la contraseña" 
                                        name="password2"
                                        value={ password2 }
                                        onChange={ onRegisterInputChange }
                                        />
                                </div>
                            </div>

                            <div className="form-group mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Telefono" 
                                    name="telefono"
                                    value={ telefono }
                                    onChange={ onRegisterInputChange }
                                />
                            </div>

                            <div className="row">
                                <div className="col-md-6 form-group mb-2">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Tipo de via" 
                                    name="via"
                                    value={ via }
                                    onChange={ onRegisterInputChange }
                                    />
                                </div>
                                <div className="col-md-6 form-group mb-2">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Calle" 
                                    name="calle"
                                    value={ calle }
                                    onChange={ onRegisterInputChange }
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3 form-group mb-2">
                                    <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Numero" 
                                    name="numero"
                                    value={ numero }
                                    onChange={ onRegisterInputChange }
                                    />
                                </div>
                                <div className="col-md-3 form-group mb-2">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Escalera" 
                                    name="escalera"
                                    value={ escalera }
                                    onChange={ onRegisterInputChange }
                                    />
                                </div>
                                <div className="col-md-3 form-group mb-2">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Planta" 
                                    name="planta"
                                    value={ planta }
                                    onChange={ onRegisterInputChange }
                                    />
                                </div>
                                <div className="col-md-3 form-group mb-2">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Puerta" 
                                    name="puerta"
                                    value={ puerta }
                                    onChange={ onRegisterInputChange }
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 form-group mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Población" 
                                        name="poblacion"
                                        value={ poblacion }
                                        onChange={ onRegisterInputChange }
                                    />
                                </div>

                                <div className="col-md-6 form-group mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Pais" 
                                        name="pais"
                                        value={ pais }
                                        onChange={ onRegisterInputChange }
                                    />
                                </div>
                            </div>

                            <div className="form-group mb-2 text-center">
                                <input 
                                    type="submit" 
                                    className="btnSubmit" 
                                    value="Crear cuenta" />
                            </div>
                            <div className="form-group text-center">
                            <Link
                                to="/auth/login"
                                className="my-font link login__link"
                            >
                                Ya tengo usuario
                            </Link>
                            <br/>
                            <Link
                                to="/"
                                className="my-font link login__link"
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