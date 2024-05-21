import Carousel from 'react-bootstrap/Carousel';
import "../styles.css"
import { useNavigate } from "react-router-dom";
import productos from '../productos.json';


const Carousel2 = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
      navigate("/" + slug);
  }

  return (
    <Carousel>

        {
          productos.map(it =>{
            return (
                  <Carousel.Item onClick={(e) => {e.preventDefault(); handleClick(it.slug) }}>
                  <img className='bg-fill' src={it.url}/>
                  <p> {it.des}</p>
                  </Carousel.Item>     
                  
            );
   
          })

        }
    </Carousel>
  );
}

export default Carousel2;