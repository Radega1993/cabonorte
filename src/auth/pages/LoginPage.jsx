import './LoginPage.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useMemo, useState } from 'react';

export const LoginPage = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formValues, setFormValues] = useState({
        correo: '',
        password: ''
    });

    const onInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const correoClass = useMemo(() => {
        if ( !formSubmitted ) return '';

        return ( formValues.correo.length > 0)
            ? 'is-valid'
            : 'is-invalid';

    }, [formValues.correo, formSubmitted])

    const passwordClass = useMemo(() => {
        if ( !formSubmitted ) return '';

        return ( formValues.password.length > 0)
            ? 'is-valid'
            : 'is-invalid';

    }, [formValues.password, formSubmitted])

    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (formValues.correo.length === 0){
            Swal.fire('Usuario en blanco', 'Ingresa un nombre de usuario','error');
        }

        if (formValues.password.length === 0){
            Swal.fire('Contraseña en blanco', 'Ingresa una contaseña','error');
        }
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ onSubmit }>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className={`form-control ${correoClass}`}
                                placeholder="Correo"
                                name="correo"
                                value={ formValues.correo }
                                onChange={ onInputChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className={`form-control ${passwordClass}`}
                                placeholder="Contraseña"
                                name="password"
                                value={ formValues.password }
                                onChange={ onInputChange }
                            />
                        </div>
                        <div className="form-group mb-2 text-center">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                            />
                        </div>

                        <div className="form-group mb-2 text-center">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}