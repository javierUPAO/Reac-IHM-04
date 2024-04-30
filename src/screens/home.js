import Header from "../componentes/header";
import Carousel  from "../componentes/carousel";
import Message from "../componentes/message";
import Aside from "../componentes/aside";
import Main from "../componentes/main";
import Form  from "../componentes/form";
function Home() {
  return (
    <div>
      <Header></Header>
      <div className="container p-3">
        <div className="row">
          <div className="col-md-9">
            <Main subtitulo="Productos"></Main>
            <Carousel></Carousel>
            <Message></Message>
          </div>
          <div className="col-md-3 border-start border-primary-subtle">
            <Aside
              subtitulo="Formulario"
              texto="No compartiremos tus datos"
            ></Aside>
            <Form></Form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
