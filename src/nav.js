const Nav =({nav,inicio,enlaces,desplegable,elemento1,elemento2,elemento3}) => {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 m-3">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">{nav}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{inicio}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{enlaces}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           {desplegable}
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">{elemento1}</a></li>
            <li><a className="dropdown-item" href="#">{elemento2}</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">{elemento3}</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">buscar</button>
      </form>
    </div>
        </div>
    </nav>
}
export default Nav;