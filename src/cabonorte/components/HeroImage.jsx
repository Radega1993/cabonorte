import Carousel from 'react-bootstrap/Carousel';

export const HeroImage = () => {

  return (

    <Carousel indicators={false}>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
                alt="Second slide"
            />

            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
}
