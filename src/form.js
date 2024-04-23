import Button from "react-bootstrap/Button";
const Form =() => {
    return <form className="border border-primary-subtle">
            <div className="m-3" >
                 <label for="mail" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="mail" aria-describedby="emailHelp"></input>
                     <div id="emailHelp" className="form-text"></div>

                     <label for="mail" className="form-label">Contraseña</label>
                    <input type="email" className="form-control" id="mail" aria-describedby="emailHelp"></input>
                     <div id="emailHelp" className="form-text"></div>
                    <Button type="submit" className="btn btn-primary m-2">   <i data-feather = "send"></i>Submit</Button>
            </div>
           </form>

}
export default Form;