import React,{StrictMode} from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Footer from "./componentes/footer";
import Home from "./screens/home";
import Faq from "./screens/faq"
import Nav from "./componentes/nav";
import Prod from "./screens/productos";
const root= createRoot (document.getElementById("root"));
const feather = require('feather-icons');
setTimeout( () => {
    feather.replace(); 
},500);

root.render(
    <StrictMode>
        <Router>
            <Nav></Nav>
            <Routes>
                 <Route  path="/"element={<Home />} />
                <Route path="/Faq" element={<Faq/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/:slug" element={<Prod/>}/>
            </Routes> 
            <Footer></Footer>
        </Router>
       
    </StrictMode>
    )