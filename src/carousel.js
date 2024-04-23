import Carousel from 'react-bootstrap/Carousel';

function Carousel2() {
  return (
    <Carousel>
      <Carousel.Item>
        <img text="First slide" src="https://st2.depositphotos.com/3378121/5193/i/450/depositphotos_51933801-stock-photo-labrador-puppies-in-a-basket.jpg" className=''/>
        <Carousel.Caption>
          <h3>Perritos bonitos</h3>
          <p>Cachorros en adopcion.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img text="Second slide" src="https://www.bicaalu.com/wp-content/uploads/videos_de_perritos_y_gatitos_en_internet.jpg" />
        <Carousel.Caption>
          <h3>Siempre amigos</h3>
          <p>Perritos y gatitos son amiguitos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img text="Third slide"  src="https://www.petlife.mx/u/fotografias/m/2023/3/29/f960x540-655_74730_5050.jpg"/>
        <Carousel.Caption>
          <h3>Perrito bonito</h3>
          <p>
            Perrito se paro en 2 patitas
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel2;