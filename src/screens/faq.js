import Accordion from 'react-bootstrap/Accordion';
function Faq() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Las puertas son a medida?</Accordion.Header>
        <Accordion.Body>
            Claro las puertas son hechas a medida
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Que herramientas utilizan?</Accordion.Header>
        <Accordion.Body>
          Se utilizan las mejores y ultimas tecnlogias para crear los productos.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>¿Que tipo de madera trabajan?</Accordion.Header>
        <Accordion.Body>
         Tornillo
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
export default Faq;