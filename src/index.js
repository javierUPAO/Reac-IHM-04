import React,{StrictMode} from "react";
import { createRoot } from "react-dom/client";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import Aside from "./aside";
import Form from "./form";
import Nav from "./nav";
import Message from "./message";
import Carousel from "./carousel";
const root= createRoot (document.getElementById("root"));

root.render(

    <StrictMode >
        <Header x="Pagina con REACT"></Header>
        <Nav nav="Barra navegacion" inicio="Inicio" enlaces="Enlaces" desplegable="Desplegable" elemento1="pongame" elemento2="buena nota" elemento3="profesor"></Nav>
        <div className="container p-3" >
            <div className="row">
                <div className="col-md-9">
                <Main subtitulo="Mascotas" texto=""></Main>
                <Carousel></Carousel>
                <Message></Message>
                </div>
                <div className="col-md-3 border-start">
                <Aside subtitulo="Formulario" texto="No compartiremos tus datos">                       
                
                
                 </Aside>  
                <Form>
                    
                </Form>
                </div>
            </div>

        </div>
        <Footer></Footer>
    </StrictMode>
    )