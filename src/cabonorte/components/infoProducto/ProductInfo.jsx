import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {onBuy} from "../../../helpers/onBuy"

export const ProductInfo = () => {
    const { products } = useSelector( state => state.product );
    const {status, user} = useSelector( state => state.auth );
    let navigate = useNavigate();
    const location = useLocation();
    const productId = location.pathname.split('/').pop();

    const product = products.find((element) => element.id === productId);

    
    if ( !product ) {
        return (<h5> Espere... </h5>);
      }

    return (
      <div className="my-3 container">
        <div className='row'>
          <div className="col-md-6">
            <div className="d-flex flex-column justify-content-center h-100">
              <img src={`/productosMain/${product.imagenURL}`} alt={product.name} className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column justify-content-center h-100">
              <h2 className="card-title">{product.showname}</h2>
              <p className="card-text">{product.name}</p>
              <p className="card-text">{product.description}</p>
              <p className="card-text">{product.price} €</p>
              <div className="text-center mt-3">
                <button onClick={() => onBuy(status, navigate, productId)} className='btn btn-primary'>Comprar</button>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-md-4">
            <h3 className="text-center">Composición</h3>
            <table className="table table-striped">
              <tbody>
                {product.composition.split(', ').map((item, index) => (
                  <tr key={index}>
                    <td>{item.trim()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <h3 className="text-center">Aditivos nutricionales</h3>
            <table className="table table-striped">
              <tbody>
                {product.nutritionalAdditives.split(', ').map((item, index) => (
                  <tr key={index}>
                    <td>{item.trim()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-md-4">
            <h3 className="text-center">Componentes Analíticos</h3>
            <table className="table table-striped">
              <tbody>
                {product.analyticalComponents.split('; ').map((item, index) => (
                  <tr key={index}>
                    <td>{item.trim()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='row'>
          <strong>Antioxidantes: </strong>{product.antioxidentes}
        </div>

      </div>
        
    );
};
