import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuthStore } from '../../../hooks';



const initialFormFields = {
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


export const BuyForm = () => {

    const { user, userInfo } = useSelector((state) => state.auth);
    const { getUserInfo, errorMessage } = useAuthStore();
    
    const [formFields, setFormFields] = useState(initialFormFields);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        getUserInfo(user.uid);
        setLoading(false);
      }, []);
      
      useEffect(() => {
        if (!loading) {
          setFormFields(prevFields => ({
            ...prevFields,
            ...userInfo,
          }));
        }
      }, [loading, userInfo]);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormFields((prevFields) => ({
        ...prevFields,
        [name]: value,
      }));
    };

    const buySubmit = async (event) => {
        event.preventDefault();
        // Lógica de compra
    };
    
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col login-form-2">
                    <h3>Dirección envio</h3>
                    <form onSubmit={ buySubmit }>
                        <div className="row">
                            <div className="col-md-6 form-group mb-2">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre" 
                                name="name"
                                value={ formFields.name }
                                onChange={ handleInputChange }
                                />
                            </div>
                            <div className="col-md-6 form-group mb-2">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Apellido" 
                                name="surname"
                                value={ formFields.surname }
                                onChange={ handleInputChange }
                                />
                            </div>
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Telefono" 
                                name="telefono"
                                value={ formFields.telefono }
                                onChange={ handleInputChange }
                            />
                        </div>

                        <div className="row">
                            <div className="col-md-6 form-group mb-2">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Tipo de via" 
                                name="via"
                                value={ formFields.via }
                                onChange={ handleInputChange }
                                />
                            </div>
                            <div className="col-md-6 form-group mb-2">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Calle" 
                                name="calle"
                                value={ formFields.calle }
                                onChange={ handleInputChange }
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
                                value={ formFields.numero }
                                onChange={ handleInputChange }
                                />
                            </div>
                            <div className="col-md-3 form-group mb-2">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Escalera" 
                                name="escalera"
                                value={ formFields.escalera }
                                onChange={ handleInputChange }
                                />
                            </div>
                            <div className="col-md-3 form-group mb-2">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Planta" 
                                name="planta"
                                value={ formFields.planta }
                                onChange={ handleInputChange }
                                />
                            </div>
                            <div className="col-md-3 form-group mb-2">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Puerta" 
                                name="puerta"
                                value={ formFields.puerta }
                                onChange={ handleInputChange }
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
                                    value={ formFields.poblacion }
                                    onChange={ handleInputChange }
                                />
                            </div>

                            <div className="col-md-6 form-group mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Pais" 
                                    name="pais"
                                    value={ formFields.pais }
                                    onChange={ handleInputChange }
                                />
                            </div>
                        </div>

                        <div className="form-group mb-2 text-center">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Comprar" />
                        </div>
                        <div className="form-group text-center">
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

    )
}