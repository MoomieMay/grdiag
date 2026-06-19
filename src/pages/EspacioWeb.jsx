import { Link } from "react-router-dom";

function EspacioWeb() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>
            Espacio Web
          </h1>

          <p>
            Explorá herramientas conversacionales, asistentes educativos y
            experiencias interactivas impulsadas por Inteligencia Artificial.
          </p>

        </div>
      </section>

      {/* Introducción */}

      <section className="section">
        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <h2 className="section-title">
                Aprender interactuando
              </h2>

              <p>
                Los espacios web basados en IA permiten crear experiencias
                dinámicas donde estudiantes y docentes pueden dialogar,
                explorar contenidos y recibir retroalimentación inmediata.
              </p>

              <p>
                Estas herramientas favorecen la participación activa,
                la personalización del aprendizaje y el desarrollo de
                habilidades digitales.
              </p>

            </div>

            <div className="col-lg-6">

              <div className="highlight-card">

                <i className="ri-global-line"></i>

                <h3>
                  Recursos interactivos
                </h3>

                <p>
                  Sitios, asistentes y experiencias que enriquecen los
                  procesos de enseñanza y aprendizaje.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Recursos */}

      <section className="section bg-light">
        <div className="container">

          <div className="text-center mb-5">

            <h2 className="section-title">
              Recursos disponibles
            </h2>

            <p className="section-subtitle">
              Distintas formas de integrar la IA en experiencias educativas.
            </p>

          </div>

          <div className="row g-4">

            <div className="col-md-6 col-lg-3">
              <div className="lesson-card">

                <i className="ri-chat-3-line"></i>

                <h4>Chatbots</h4>

                <p>
                  Sistemas conversacionales que responden preguntas y
                  acompañan procesos de aprendizaje.
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="lesson-card">

                <i className="ri-graduation-cap-line"></i>

                <h4>Asistentes Educativos</h4>

                <p>
                  Herramientas diseñadas para orientar actividades,
                  explicar conceptos y brindar apoyo pedagógico.
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="lesson-card">

                <i className="ri-robot-2-line"></i>

                <h4>Asistentes Inteligentes</h4>

                <p>
                  Soluciones basadas en IA capaces de adaptarse a
                  necesidades específicas de aprendizaje.
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="lesson-card">

                <i className="ri-gamepad-line"></i>

                <h4>Experiencias Interactivas</h4>

                <p>
                  Recursos que promueven la exploración activa,
                  el descubrimiento y la participación.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Aplicaciones */}

      <section className="section">
        <div className="container">

          <div className="text-center mb-5">

            <h2 className="section-title">
              Aplicaciones en el aula
            </h2>

          </div>

          <div className="row g-4">

            <div className="col-lg-4">
              <div className="example-card">

                <h4>
                  Tutor Virtual
                </h4>

                <p>
                  Un chatbot que responde preguntas sobre contenidos
                  curriculares y acompaña el estudio autónomo.
                </p>

              </div>
            </div>

            <div className="col-lg-4">
              <div className="example-card">

                <h4>
                  Personajes Históricos
                </h4>

                <p>
                  Crear asistentes que respondan como figuras históricas
                  para promover la comprensión contextual.
                </p>

              </div>
            </div>

            <div className="col-lg-4">
              <div className="example-card">

                <h4>
                  Simulaciones Interactivas
                </h4>

                <p>
                  Diseñar experiencias donde los estudiantes exploren
                  situaciones, tomen decisiones y analicen resultados.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>



      {/* CTA */}

      <section className="cta-textos">
        <div className="container text-center">

          <h2>
            Explorá nuevas formas de aprender
          </h2>

          <p>
            Integrá asistentes inteligentes y experiencias interactivas
            para enriquecer las propuestas educativas.
          </p>

        </div>
      </section>

    </>
  );
}

export default EspacioWeb;