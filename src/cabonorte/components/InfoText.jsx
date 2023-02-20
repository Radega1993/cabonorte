import { useState } from 'react';
import perroportada from '../../assets/perroportada.jpg';

export const InfoText = () => {
  const [title, setTitle] = useState('¡Bienvenido a Cabo Norte!');

  const handleTitleChange = (e) => setTitle(e.target.value);

  return (
    <section className="jumbotron text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 contenedor-padre">
            <img src={perroportada} className="img-fluid" alt="Hero Image" style={{ width: '100%' }} />
          </div>
          <div className="col-md-6">
            <h1 className="jumbotron-heading">{title}</h1>
            <p className="text-muted letra-home">Solo la mejor alimentación para tu mejor amigo.</p>
            <p className="text-muted letra-home">Alimentos desarrollados por expertos nutricionistas y veterinarios, hechos
              con ingredientes naturales y nutritivos sin conservantes ni saborizantes
              artificiales y ricos en antioxidantes para mantener a tu perro feliz y
              saludable. (1º ingrediente siempre carne)
              Una amplia variedad de opciones…. específica para cualquier estado
              fisiológico, edad y tamaño de su perro.
              No solo eso, también ofrecemos asesoramiento en nutrición, un precio
              razonable y envío rápido directamente a tu puerta…!
              Ahorra tiempo y dinero comprando en línea con nosotros.
              No te conformes con menos, elije nuestra alimentación para tu mascota,
              de la más alta calidad que existe en el mercado y ve la diferencia en su
              salud y felicidad. </p>
            <p className="text-muted letra-home">¡Haz tu pedido hoy y dale a tu perro lo mejor!</p>
          </div>
        </div>
      </div>
    </section>
      
  );
};
