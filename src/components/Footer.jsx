import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4 text-center">
      <div className="container">
        <p className="mb-3 fw-semibold">
          Todos los recursos mostrados fueron creados por nosotros con ayuda de IA.
          Cada contenido aclara la herramienta utilizada.
        </p>

        <div className="footer-bottom">
          <span> © 2026 </span>
          <span> Creado por Grupo 3 </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;