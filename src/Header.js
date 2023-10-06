import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Navbar from './Navbar';

function Header() {
  return (
    <div>
      <div className="d-lg-block d-md-none"> {/* Oculta Navbar en pantallas medianas y pequeñas */}
        <Navbar />
      </div>
      <Carousel>
        <Carousel.Item>
          <img src="./img/renzo1.jpg" className="d-block w-100" alt="Imagen 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="./img/mono1.jpg" className="d-block w-100" alt="Imagen 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="./img/vivoGral2.jpg" className="d-block w-100" alt="Imagen 3" />
        </Carousel.Item>
      </Carousel>
      <section className="text-light">
        BIENVENIDOS
      </section>
    </div>
  );
}

export default Header;
