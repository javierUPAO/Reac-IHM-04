const Carousel =() => {
    return <div id="carouselExample" className="carousel slide">

    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://st2.depositphotos.com/3378121/5193/i/450/depositphotos_51933801-stock-photo-labrador-puppies-in-a-basket.jpg" className="d-block w-100 h-400" alt="c"/>
      </div>
      <div className="carousel-item">
        <img src="https://www.bicaalu.com/wp-content/uploads/videos_de_perritos_y_gatitos_en_internet.jpg" className="d-block w-100 h-400" alt="b"/>
      </div>
      <div className="carousel-item">
        <img src="https://www.petlife.mx/u/fotografias/m/2023/3/29/f960x540-655_74730_5050.jpg" className="d-block w-100 h-400" alt="a"/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
}
export default Carousel;