import Accordion from 'react-bootstrap/Accordion';
function Faq() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Puedo adoptar mas de una mascota?</Accordion.Header>
        <Accordion.Body>
            Si claro puedes adoptar mas de 1 mascota siempre y cuando demuestres que puedes mantenerla y que no le faltara nada
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Estan vacunados?</Accordion.Header>
        <Accordion.Body>
          No, usted se hace responsable por la vacunacion de los animales.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Estan vacunados?</Accordion.Header>
        <Accordion.Body>
          No, usted se hace responsable por la vacunacion de los animales.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
export default Faq;