import logo from "./images/arcadia-logo-blanco.png";
import './App.scss';
function App() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand mr-auto" href="index.html"><img src={logo} alt="Logo de Arcadia"/></a>
      <button className="navbar-toggler order-2 " type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Abrir navegación">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse order-4 order-lg-1 order-xl-1" id="navbarContent">
          <ul className=" navbar-nav">
              <li className="nav-item"><a href="index.html" className="nav-link">Inicio</a></li>
              <li className="nav-item"><a href="pages/nosotros.html" className="nav-link">Nosotros</a></li>
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="pages/tienda.html">Tienda</a>
                  <ul className="dropdown-menu">
                      <li className="dropdown-item"><a href="pages/tienda.html#tops">Tops</a></li>
                      <li className="dropdown-item"><a href="pages/tienda.html#calzas">Calzas</a></li>
                      <li className="dropdown-item"><a href="pages/talles.html">Guía de talles</a></li>
                  </ul>
              </li>
              <li className="nav-item"><a href="pages/faq.html" className="nav-link">Preguntas Frecuentes</a></li>
              <li className="nav-item"><a href="pages/blog.html" className="nav-link">Blog</a></li>
              <li className="nav-item"><a href="pages/contacto.html" className="nav-link">Contacto</a></li>
          </ul>
      </div>
      <div className="iconsHeader  mr-3 text-white order-1 order-lg-2 order-xl-2 flex-sm-grow-2">
          <i className="icon-search"></i>
          <i className="icon-user"></i>
          <i className="icon-cart"></i>
      </div> 
  </nav>
</header>

  );
}

export default App;
