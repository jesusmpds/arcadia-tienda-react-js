import '../../App.scss'
import '../../fonts/icons.scss'
import logo from "../../images/arcadia-logo-blanco.png";
import CartWidget from "../CartWidget/CartWidget"
import {Link} from 'react-router-dom';

const NavBar = () =>{
    return (
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark px-2">
          <Link to="/" className="navbar-brand me-auto"><img src={logo} alt="Logo de Arcadia"/></Link>
          <button className="navbar-toggler order-2 me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse order-4 order-lg-1 order-xl-1" id="navbarContent">
              <ul className=" navbar-nav">
                  <li className="nav-item"><Link to="/" className="nav-link">Inicio</Link></li>
                  <li className="nav-item"><Link to="/nosotros" className="nav-link">Nosotros</Link></li>
                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-haspopup="true" aria-expanded="false" href="pages/tienda.html">Tienda</a>
                      <ul className="dropdown-menu">
                          <li className="dropdown-item"><Link to="/category/tops">Tops</Link></li>
                          <li className="dropdown-item"><Link to="/category/calzas">Calzas</Link></li>
                          <li className="dropdown-item">Guía de talles</li>
                      </ul>
                  </li>
                  <li className="nav-item"><a href="pages/faq.html" className="nav-link">Preguntas Frecuentes</a></li>
                  <li className="nav-item"><a href="pages/blog.html" className="nav-link">Blog</a></li>
                  <li className="nav-item"><a href="pages/contacto.html" className="nav-link">Contacto</a></li>
              </ul>
          </div>
          <CartWidget/>
          </nav>
        </header>
    );
}

export default NavBar;