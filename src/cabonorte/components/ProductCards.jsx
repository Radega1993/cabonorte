import { useState } from 'react';
import { useSelector } from 'react-redux';

export const ProductCards = () => {

  const { products } = useSelector( state => state.product );
/*
  const [producto] = useState([
    { id: 1, name: 'Puppy médium', image: 'product1.jpg' },
    { id: 2, name: 'Puppy Large', image: 'product2.jpg' },
    { id: 3, name: 'Adult Medium Pollo', image: 'product3.jpg' },
    { id: 4, name: 'Adult Medium Lamb', image: 'product4.jpg' },
    { id: 5, name: 'Adult Medium Tuna', image: 'product5.jpg' },
    { id: 6, name: 'Adult Large Pollo', image: 'product6.jpg' },
    { id: 7, name: 'Adult Large Lamb', image: 'product7.jpg' },
    { id: 8, name: 'Adult Large Tuna', image: 'product8.jpg' },
    { id: 9, name: 'Medium/large light', image: 'product9.jpg' },
    { id: 10, name: 'Mature médium/large', image: 'product10.jpg' },
    { id: 11, name: 'Lata de salmón', image: 'product11.jpg' },
    { id: 12, name: 'Lata de pollo', image: 'product12.jpg' },
    { id: 13, name: 'Lata de cordero', image: 'product13.jpg' },
    { id: 14, name: 'Hipoalergenic horse', image: 'product14.jpg' },
    { id: 15, name: 'hipoalergenic fish', image: 'product15.jpg' },
    { id: 16, name: 'Metabolic', image: 'product16.jpg' },
    { id: 17, name: 'hepatic', image: 'product17.jpg' },
    { id: 18, name: 'intestinal', image: 'product17.jpg' },
    { id: 19, name: 'diabetic', image: 'product17.jpg' },
    { id: 20, name: 'renal', image: 'product17.jpg' },
    { id: 21, name: 'urinary', image: 'product17.jpg' }
  ]);*/
  

  
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
                <button className='btn btn-primary'>comprar</button>
                &nbsp;
                <button className='btn btn-warning'>mas información</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}