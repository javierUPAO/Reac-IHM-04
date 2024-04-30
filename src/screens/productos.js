import Productos from '../productos.json';
const Prod = () =>
{ const Currentroute=window.location.pathname;
   const productos = Productos.find(it =>Currentroute.includes(it.slug))
   return(  
    <div className="container">
        <div className="row">
            <div className="col-md-6">

                    <p>{productos.slug}</p>
                    <img src={productos.url}></img>
            </div>
            <div className="col-md-6">
            </div>
        </div>
    </div>
   );
}
export default Prod;