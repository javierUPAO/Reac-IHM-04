const Footer =() => {
    return  <footer className="bg-dark-subtle ,mt-3, p-3">
        <h2 className="text-center">Footer</h2>
        <div class="container text-center">
  <div class="row">
    <div class="col">
     Terminos y condiciones
    </div>
    <div class="col">
      Politicas de privacidad
    </div>
  </div>
  <div class="row">
    <div class="col">
    <i data-feather = "facebook"> </i>  <a href="https://www.facebook.com/" target="_blank" className="text-decoration-none  text-black">Facebook</a> 
    </div>
    <div class="col">
    <i data-feather = "instagram">  </i>  <a href="https://www.instagram.com/" target="_blank" className="text-decoration-none  text-black" >Instagram</a> 
    </div> 
    <div class="col">
    <i data-feather = "twitter">  </i>  <a href="https://twitter.com/?lang=es" target="_blank" className="text-decoration-none text-black">Twitter</a> 
    </div>
  </div>
</div>
    </footer>
}
export default Footer;