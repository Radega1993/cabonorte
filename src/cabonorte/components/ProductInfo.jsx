import { useSelector } from "react-redux";

export const ProductInfo = ({initialProduct}) => {
   
    const { products } = useSelector( state => state.products );
   
    return (
        <div className="card">
            <img src={product.image} className="card-img-top" alt={product.name}/>
            <div className="card-body">
                <h5 className="card-title">{product.showname}</h5>
                <p className="card-text">{product.description}</p>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Nombre: {product.name}</li>
                  <li className="list-group-item">Precio: {product.price}</li>
                  <li className="list-group-item">Composición: {product.composition}</li>
                  <li className="list-group-item">ADITIVOS NUTRICIONALES: {product.nutritionalAdditives}</li>
                  <li className="list-group-item">COMPONENTES ANALÍTICOS: {product.analyticalComponents}</li>
                </ul>
            </div>
        </div>
    );
}