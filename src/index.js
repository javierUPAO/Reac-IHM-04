import React,{StrictMode} from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import Aside from "./aside";
import Form from "./form";
import Nav from "./nav";
import Message from "./message";
import Carousel from "./carousel";
const root= createRoot (document.getElementById("root"));
const feather = require('feather-icons');

setTimeout( () => {
    feather.replace();
},1000);

root.render(

    <StrictMode >
        <Header x="Adopcion de mascotas con REACT"></Header>
        <Nav></Nav>
        <div className="container p-3" >
            <div className="row">
                <div className="col-md-9">
                <Main subtitulo="Mascotas"></Main>
                <Carousel></Carousel>
                <Message></Message>
                </div>
                <div className="col-md-3 border-start border-primary-subtle">
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