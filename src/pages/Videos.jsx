import { Link } from "react-router-dom";
import runway from "../assets/images/runway.png";
import invideo from "../assets/images/invideo.png";
import veedio from "../assets/images/veedio.png";

function Videos() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>
            Videos Educativos con IA
          </h1>

          <p>
            La Inteligencia Artificial permite producir videos educativos
            combinando guiones, narraciones, imágenes, animaciones y
            edición automatizada para generar recursos didácticos más
            atractivos y accesibles.
          </p>

        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="row g-5 align-items-center">

            <div className="col-lg-6">

              <h2 className="section-title">
                Producción audiovisual asistida por IA
              </h2>

              <p>
                Las herramientas actuales permiten automatizar gran parte
                del proceso de producción de videos educativos, desde la
                creación del guion hasta la generación de narraciones,
                recursos visuales y subtítulos.
              </p>

              <p>
                Como ejemplo, pueden ver como utilizando estas herramientas se desarrolló un video educativo sobre
                creación de contenido mediante Inteligencia Artificial,
                destinado a docentes de educación primaria, estudiantes de
                formación docente y profesionales de Tecnología Educativa.
              </p>

            </div>

            <div className="col-lg-6">

              <div className="highlight-card">

                <i className="ri-video-line"></i>

                <h3>
                  Aprender mediante recursos multimedia
                </h3>

                <p>
                  La combinación de imagen, sonido, texto y movimiento
                  favorece la comprensión de conceptos complejos y mejora
                  la experiencia de aprendizaje.
                </p>

                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/nx-YWrpJp_8?si=dkf2V-oJjSv_Fv9Q"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="section bg-light">
        <div className="container">

          <div className="text-center mb-5">

            <h2 className="section-title">
              Herramientas recomendadas
            </h2>

            <p className="section-subtitle">
              Plataformas utilizadas para la generación y edición de
              contenidos audiovisuales educativos.
            </p>

          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="example-card h-100">

                <img
                  src={runway}
                  alt="Runway"
                  className="img-fluid rounded mb-3"
                />

                <h4>Runway</h4>

                <p>
                  Generación de videos mediante IA a partir de texto,
                  imágenes o clips existentes.
                </p>

                <ul className="text-list">
                  <li>Alta calidad visual</li>
                  <li>Animaciones rápidas</li>
                  <li>Múltiples estilos visuales</li>
                </ul>

                <a
                  href="https://app.runwayml.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary-custom mt-2"
                >
                  <i className="ri-external-link-line me-2"></i>
                  Visitar herramienta
                </a>

              </div>
            </div>

            <div className="col-md-4">
              <div className="example-card h-100">

                <img
                  src={invideo}
                  alt="InVideo AI"
                  className="img-fluid rounded mb-3"
                />

                <h4>InVideo AI</h4>

                <p>
                  Creación automática de videos con guion,
                  narración y edición integrada.
                </p>

                <ul className="text-list">
                  <li>Interfaz intuitiva</li>
                  <li>Automatización avanzada</li>
                  <li>Producción rápida</li>
                </ul>

                <a
                  href="https://ai.invideo.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary-custom mt-2"
                >
                  <i className="ri-external-link-line me-2"></i>
                  Visitar herramienta
                </a>

              </div>
            </div>

                        <div className="col-md-4">
              <div className="example-card h-100">

                <img
                  src={veedio}
                  alt="Veed.io"
                  className="img-fluid rounded mb-3"
                />

                <h4>Veed.io</h4>

                <p>
                  Creación automática de videos con guion,
                  narración y edición integrada.
                </p>

                <ul className="text-list">
                  <li>Interfaz intuitiva</li>
                  <li>Automatización avanzada</li>
                  <li>Producción rápida</li>
                </ul>

                <a
                  href="https://app.veedio.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary-custom mt-2"
                >
                  <i className="ri-external-link-line me-2"></i>
                  Visitar herramienta
                </a>

              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="text-center mb-5">

            <h2 className="section-title">
              Proceso de producción
            </h2>

          </div>

          <div className="row g-4">

            <div className="col-md-6 col-lg-3">
              <div className="lesson-card">

                <i className="ri-draft-line"></i>

                <h4>1. Guion</h4>

                <p>
                  Diseño de la estructura narrativa y de los contenidos
                  educativos mediante prompts.
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="lesson-card">

                <i className="ri-gallery-line"></i>

                <h4>2. Recursos visuales</h4>

                <p>
                  Selección o generación de imágenes y escenas para
                  acompañar la explicación.
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="lesson-card">

                <i className="ri-mic-line"></i>

                <h4>3. Narración</h4>

                <p>
                  Integración de voces y elementos sonoros para mejorar
                  la experiencia audiovisual.
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="lesson-card">

                <i className="ri-film-line"></i>

                <h4>4. Edición final</h4>

                <p>
                  Ajuste de escenas, subtítulos y sincronización de los
                  distintos recursos multimedia.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="section bg-light">
        <div className="container">

          <div className="text-center mb-5">

            <h2 className="section-title">
              Beneficios educativos
            </h2>

          </div>

          <div className="row g-4">

            <div className="col-md-6">
              <div className="lesson-card">

                <i className="ri-eye-line"></i>

                <h4>Mayor impacto visual</h4>

                <p>
                  Las animaciones y recursos multimedia favorecen la
                  comprensión de conceptos abstractos.
                </p>

              </div>
            </div>

            <div className="col-md-6">
              <div className="lesson-card">

                <i className="ri-accessibility-line"></i>

                <h4>Accesibilidad</h4>

                <p>
                  Los subtítulos automáticos y narraciones permiten
                  llegar a públicos más diversos.
                </p>

              </div>
            </div>

            <div className="col-md-6">
              <div className="lesson-card">

                <i className="ri-time-line"></i>

                <h4>Ahorro de tiempo</h4>

                <p>
                  La automatización reduce significativamente los tiempos
                  de producción audiovisual.
                </p>

              </div>
            </div>

            <div className="col-md-6">
              <div className="lesson-card">

                <i className="ri-lightbulb-line"></i>

                <h4>Creatividad ampliada</h4>

                <p>
                  La IA ofrece nuevas posibilidades para diseñar recursos
                  innovadores y personalizados.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="text-center mb-5">

            <h2 className="section-title">
              Consejos clave para diseñar con IA
            </h2>

          </div>

          <div className="row g-4">

            <div className="col-md-6">
              <div className="lesson-card">

                <i className="ri-repeat-line"></i>

                <h4>La IA necesita supervisión</h4>

                <p>
                  Los resultados generados requieren revisión,
                  contextualización y adaptación pedagógica.
                </p>

              </div>
            </div>

            <div className="col-md-6">
              <div className="lesson-card">

                <i className="ri-user-star-line"></i>

                <h4>La curaduría docente es esencial</h4>

                <p>
                  La selección y validación de contenidos continúa siendo
                  una tarea fundamental del docente.
                </p>

              </div>
            </div>

            <div className="col-md-6">
              <div className="lesson-card">

                <i className="ri-magic-line"></i>

                <h4>Potencia la creatividad</h4>

                <p>
                  La IA amplía las posibilidades del diseño didáctico y
                  permite explorar nuevos formatos de enseñanza.
                </p>

              </div>
            </div>

            <div className="col-md-6">
              <div className="lesson-card">

                <i className="ri-graduation-cap-line"></i>

                <h4>La pedagogía sigue primero</h4>

                <p>
                  La tecnología es una herramienta; el sentido educativo
                  depende de las decisiones pedagógicas que la acompañan.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="cta-textos">
        <div className="container text-center">

          <h2>
            Crear videos educativos nunca fue tan accesible
          </h2>

          <p>
            La combinación entre creatividad docente e Inteligencia
            Artificial permite diseñar recursos audiovisuales más
            inclusivos, dinámicos y significativos.
          </p>

          <Link
            to="/espacio-web"
            className="btn btn-secondary-custom fw-bold fs-5"
          >
            Explorar la creación de espacios web
          </Link>

        </div>
      </section>
    </>
  );
}

export default Videos;