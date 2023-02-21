import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const ProductInfo = () => {
    const { products } = useSelector( state => state.product );
    const {status, user} = useSelector( state => state.auth );
    let navigate = useNavigate();
    const location = useLocation();
    const productId = location.pathname.split('/').pop();

    const product = products.find((element) => element.id === productId);

    const onBuy = () => {
        if (status === 'not-authenticated') {
          Swal.fire({
            title: 'Tienes que estar logeado para comprar',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Log in',
            customClass: {
              actions: 'my-actions',
              cancelButton: 'order-1 right-gap',
              confirmButton: 'order-2',
            }
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/auth/login');
            }
          })
          
        }
      }

    
    if ( !product ) {
        return (<h5> Espere... </h5>);
      }

    return (
        <div className="my-3">
            <img src={`/productosMain/${product.imagenURL}`} alt={product.name} className="image-info" />
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p className="card-text">{product.showname}</p>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.price} €</p>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Composición</h3>
                        <ul>
                            {product.composition.split(', ').map((item, index) => (
                                <li key={index}>{item.trim()}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h3>Aditivos nutricionales</h3>
                        <ul>
                            {product.nutritionalAdditives.split(', ').map((item, index) => (
                                <li key={index}>{item.trim()}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <h3>Componentes Analíticos</h3>
                <ul>
                    {product.analyticalComponents.split('; ').map((item, index) => (
                        <li key={index}>{item.trim()}</li>
                    ))}
                </ul>
                <button onClick={onBuy} className='btn btn-primary'>Comprar</button>
            </div>
        </div>
    
        
    );
};
