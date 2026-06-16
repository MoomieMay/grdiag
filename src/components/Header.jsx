import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          <img
            src="/logo.png"
            alt="Logo"
            height="50"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent" >
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/nosotros">
                Sobre Nosotros
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/nosotros">
                Banco de Recursos
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Herramientas
              </a>

              <ul className="dropdown-menu">

                <li>
                  <Link
                    className="dropdown-item"
                    to="/textos"
                  >
                    Texto
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/imagenes"
                  >
                    Imágenes
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/podcast"
                  >
                    Podcast
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/videos"
                  >
                    Videos
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/chatbots"
                  >
                    Chatbots
                  </Link>
                </li>

              </ul>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;