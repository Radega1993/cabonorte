import img1 from '../../assets/productosMain/img1.webp';
import img2 from '../../assets/productosMain/img2.webp';
import img3 from '../../assets/productosMain/img3.webp';
import img4 from '../../assets/productosMain/img4.webp';

const cards = [
  {
    title: 'Tarjeta 1',
    image: img1,
    subtitle: 'Subtítulo de la tarjeta 1',
  },
  {
    title: 'Tarjeta 2',
    image: img2,
    subtitle: 'Subtítulo de la tarjeta 2',
  },
  {
    title: 'Tarjeta 3',
    image: img3,
    subtitle: 'Subtítulo de la tarjeta 3',
  },
  {
    title: 'Tarjeta 4',
    image: img4,
    subtitle: 'Subtítulo de la tarjeta 4',
  },
];

export const ProductosMain= () => {
  return (
    <div className='container'>
        <h2 className="text-center mb-4 mt-4">La alimentación premium</h2>
        <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-3">
            <div className="card text-center" style={{ border: 'solid 1px' }}>
                <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <img src={card.image} alt={card.title} className="img-fluid" />
                <p className="card-text">{card.subtitle}</p>
                </div>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
}
