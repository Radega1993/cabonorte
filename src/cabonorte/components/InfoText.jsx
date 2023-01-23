import { useState } from 'react';
import perroportada from '../../assets/perroportada.jpg';

export const InfoText = () => {
    const [title, setTitle] = useState('¡Bienvenido a Cabo Norte!');
  const [description, setDescription] = useState(`¿Está cansado de comprar comida para perros de baja calidad llena de ingredientes artificiales y poco saludables? 
    ¡Mire más allá! En nuestra tienda, ofrecemos solo los mejores alimentos para su mejor amigo canino, hechos con ingredientes naturales y nutritivos para mantener a su perro feliz y saludable. \n Además, ofrecemos una amplia variedad de opciones para perros de todas las edades, tamaños y necesidades especiales. \n Ya sea que su perro sea un cachorro o un adulto, pequeño o grande, o tenga necesidades dietéticas especiales, tenemos algo que se adapte a sus necesidades. \n No solo eso, sino que también ofrecemos precios competitivos y envío rápido directamente a su puerta. ¡No más esperar en largas líneas en la tienda de mascotas! Ahorre tiempo y dinero comprando en línea con nosotros. No se conforme con menos para su mejor amigo. \n Elija nuestra comida para perros de alta calidad y vea la diferencia en su salud y felicidad. 
    ¡Haga su pedido hoy y dale a su perro lo mejor!`);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleImageUrlChange = (e) => setImageUrl(e.target.value);

  return (
    <section className="jumbotron text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 contenedor-padre">
            <img src={perroportada} className="img-fluid" alt="Hero Image" style={{ width: '100%' }} />
          </div>
          <div className="col-md-6">
            <h1 className="jumbotron-heading">{title}</h1>
            <p className="text-muted letra-home">{description}</p>
          </div>
        </div>
      </div>
    </section>
      
  );
};
