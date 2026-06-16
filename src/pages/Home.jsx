import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";

function Home() {
  return (
    <>
      <PageBanner
        title="Educa IA"
        subtitle="Generación de contenidos educativos para nivel primario mediante Inteligencia Artificial."
      />

      {/* Presentación */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">
                Enseñar con creatividad y tecnología
              </h2>

              <p>
                Educa IA reúne herramientas de Inteligencia Artificial orientadas a la creación de recursos educativos para docentes de nivel primario.
              </p>

              <p>
                Generá textos, imágenes, podcasts, videos y chatbots educativos de forma rápida y personalizada.
              </p>
            </div>

            <div className="col-lg-6 text-center">
              <i className="ri-robot-2-line home-icon"></i>
            </div>
          </div>

        </div>
      </section>

      {/* Herramientas */}
      <section className="section tools-section">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            Herramientas Disponibles
          </h2>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <Link to="/textos" className="tool-card">
                <i className="ri-file-text-line"></i>
                <h4>Texto</h4>
                <p>
                  Cuentos, actividades, evaluaciones y consignas.
                </p>
              </Link>
            </div>

            <div className="col-md-6 col-lg-4">
              <Link to="/imagenes" className="tool-card">
                <i className="ri-image-line"></i>
                <h4>Imágenes</h4>
                <p>
                  Recursos visuales e ilustraciones educativas.
                </p>
              </Link>
            </div>

            <div className="col-md-6 col-lg-4">
              <Link to="/podcast" className="tool-card">
                <i className="ri-mic-line"></i>
                <h4>Podcast</h4>
                <p>
                  Audio educativo para diferentes áreas curriculares.
                </p>
              </Link>
            </div>

            <div className="col-md-6 col-lg-6">
              <Link to="/videos" className="tool-card">
                <i className="ri-video-line"></i>
                <h4>Videos y Animaciones</h4>
                <p>
                  Material audiovisual para acompañar aprendizajes.
                </p>
              </Link>
            </div>

            <div className="col-md-6 col-lg-6">
              <Link to="/chatbots" className="tool-card">
                <i className="ri-robot-line"></i>
                <h4>Chatbots</h4>
                <p>
                  Asistentes conversacionales educativos.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            ¿Por qué utilizar IA en Educación Primaria?
          </h2>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="benefit-card">
                <i className="ri-time-line"></i>
                <h5>Ahorro de tiempo</h5>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="benefit-card">
                <i className="ri-lightbulb-line"></i>
                <h5>Creatividad</h5>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="benefit-card">
                <i className="ri-group-line"></i>
                <h5>Inclusión</h5>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="benefit-card">
                <i className="ri-settings-4-line"></i>
                <h5>Personalización</h5>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Proceso */}
      <section className="section process-section">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            Cómo funciona
          </h2>

          <div className="row text-center">
            <div className="col-lg-4">
              <div className="step-card">
                <span>1</span>
                <h4>Elegí una herramienta</h4>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="step-card">
                <span>2</span>
                <h4>Definí tu necesidad</h4>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="step-card">
                <span>3</span>
                <h4>Generá contenido</h4>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>
            Explorá las posibilidades de la IA en educación
          </h2>

          <p>
            Descubrí recursos, ejemplos y herramientas para potenciar
            la enseñanza en el nivel primario.
          </p>

          <Link
            to="/textos"
            className="btn btn-primary-custom"
          >
            Comenzar
          </Link>

        </div>
      </section>

    </>
  );
}

export default Home;