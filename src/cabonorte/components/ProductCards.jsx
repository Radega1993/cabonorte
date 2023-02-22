import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export const ProductCards = () => {

  const { products } = useSelector( state => state.product );
  const {status, user} = useSelector( state => state.auth );
  let navigate = useNavigate();

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

  const onMasInfo = (id) => {
    navigate(`/product/${id}`);
  }
    

  return (
    <div className="container">
      <h2 className='text-center'>La alimentación premium</h2>
      <div className="row mt-3">
        {products.map(product => (
          <div key={product.id} className="col-6 col-md-4 mb-3">
            <div className={`card h-100 card-rounded`}>
              <div className="card-body">
                <h5 className="card-title text-center">{product.showname}</h5>
                <h5 className="card-title text-center">{product.price} EUR</h5>
              </div>
              <img src={`/productosMain/${product.imagenURL}`} className="card-img-top" alt={product.showname}/>
              <div className="card-body justify-content-between text-center">
                <button onClick={onBuy} className='btn btn-primary'>Comprar</button>
                &nbsp;
                <button onClick={() => onMasInfo(product.id)} className='btn btn-warning'>Más información</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}