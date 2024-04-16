const Form =() => {
    return <form className="border">
            <div className="m-3" >
                 <label for="mail" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="mail" aria-describedby="emailHelp"></input>
                     <div id="emailHelp" className="form-text"></div>

                     <label for="mail" className="form-label">Contraseña</label>
                    <input type="email" className="form-control" id="mail" aria-describedby="emailHelp"></input>
                     <div id="emailHelp" className="form-text"></div>
                    <button type="submit" className="btn btn-primary m-2">Submit</button>
            </div>
           </form>

}
export default Form;