import '../../styles.css'
import perro1 from '../../assets/perro1.webp';

export const FranjaMain = () => {
    return (

      <div className="row mt-4 mb-4">
        <div style={{ display: 'flex', margin: '0 20px' }}>
      <img src={perro1} alt="Mi imagen" style={{ marginLeft: 'auto' }} />
      <p>Mi texto</p>
    </div>
      </div>
    );
  }