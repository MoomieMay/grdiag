import { Link } from "react-router-dom";

function Podcast() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>
            Producción de Podcast con IA
          </h1>

          <p>
            La Inteligencia Artificial permite crear guiones, locuciones,
            efectos sonoros y piezas de audio educativas que enriquecen
            las experiencias de aprendizaje y favorecen la accesibilidad.
          </p>

        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="row g-5 align-items-center">

            <div className="col-lg-6">

              <h2 className="section-title">
                ¿Qué es un podcast educativo?
              </h2>

              <p>
                Un podcast educativo es un recurso sonoro que permite
                transmitir contenidos, relatos, explicaciones o entrevistas
                mediante formatos accesibles y atractivos para estudiantes.
              </p>

              <p>
                Gracias a la IA generativa es posible automatizar gran parte
                del proceso de producción, desde la escritura del guion hasta
                la generación de voces sintéticas y música de acompañamiento.
              </p>

            </div>

            <div className="col-lg-6">

              <div className="highlight-card">

                <i className="ri-mic-line"></i>

                <h3>
                  Audio para aprender
                </h3>

                <p>
                  Los podcasts permiten diversificar las estrategias de
                  enseñanza, promover la escucha activa y ofrecer nuevas
                  formas de acceder al conocimiento.
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
              Herramientas utilizadas
            </h2>
          </div>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="example-card">

                <h4>ChatGPT</h4>

                <p>
                  Creación de guiones, planificación de episodios y
                  elaboración de contenidos educativos.
                </p>

              </div>
            </div>

            <div className="col-md-4">
              <div className="example-card">

                <h4>ElevenLabs</h4>

                <p>
                  Generación de locuciones mediante voces sintéticas
                  naturales y personalizables.
                </p>

              </div>
            </div>

            <div className="col-md-4">
              <div className="example-card">

                <h4>Suno AI</h4>

                <p>
                  Creación de música y ambientaciones sonoras para
                  acompañar los episodios.
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
              Proceso de producción
            </h2>
          </div>

          <div className="row g-4">

            <div className="col-md-6 col-lg-3">
              <div className="lesson-card">

                <i className="ri-edit-line"></i>

                <h4>1. Guion</h4>

                <p>
                  Definir objetivos, audiencia y contenidos mediante
                  prompts específicos.
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="lesson-card">

                <i className="ri-voiceprint-line"></i>

                <h4>2. Locución</h4>

                <p>
                  Transformar el texto en audio utilizando voces
                  generadas por IA.
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="lesson-card">

                <i className="ri-music-2-line"></i>

                <h4>3. Ambientación</h4>

                <p>
                  Incorporar música, efectos y recursos sonoros
                  adecuados al contenido.
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="lesson-card">

                <i className="ri-upload-cloud-line"></i>

                <h4>4. Publicación</h4>

                <p>
                  Compartir el recurso en entornos educativos
                  digitales.
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
              Aprendizajes obtenidos
            </h2>
          </div>

          <div className="row g-4">

            <div className="col-md-6">
              <div className="lesson-card">

                <i className="ri-repeat-line"></i>

                <h4>La calidad depende del prompt</h4>

                <p>
                  Instrucciones claras y detalladas permiten generar
                  guiones más precisos y adaptados a los objetivos
                  educativos.
                </p>

              </div>
            </div>

            <div className="col-md-6">
              <div className="lesson-card">

                <i className="ri-sound-module-line"></i>

                <h4>La voz influye en la experiencia</h4>

                <p>
                  La selección de la voz, velocidad y entonación impacta
                  directamente en la comprensión del mensaje.
                </p>

              </div>
            </div>

            <div className="col-md-6">
              <div className="lesson-card">

                <i className="ri-tools-line"></i>

                <h4>La combinación de herramientas potencia resultados</h4>

                <p>
                  Integrar generadores de texto, voz y música permite
                  construir producciones más completas y atractivas.
                </p>

              </div>
            </div>

            <div className="col-md-6">
              <div className="lesson-card">

                <i className="ri-user-star-line"></i>

                <h4>El criterio pedagógico sigue siendo esencial</h4>

                <p>
                  La IA facilita la producción, pero la selección,
                  adaptación y validación del contenido continúa siendo
                  responsabilidad del docente.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="cta-textos">
        <div className="container text-center">

          <h2>
            El audio amplía las posibilidades de enseñanza
          </h2>

          <p>
            Los podcasts creados con IA permiten generar experiencias
            educativas accesibles, creativas y significativas para
            distintos contextos de aprendizaje.
          </p>

          <Link
            to="/videos"
            className="btn btn-secondary-custom fw-bold fs-5"
          >
            Explorar la creación de videos
          </Link>

        </div>
      </section>
    </>
  );
}

export default Podcast;