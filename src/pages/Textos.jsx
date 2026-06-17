import { Link } from "react-router-dom";

function Textos() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>
            Generación de Textos
          </h1>

          <p>
            La Inteligencia Artificial permite crear materiales educativos,
            actividades, cuentos, secuencias didácticas y evaluaciones
            adaptadas a las necesidades del aula.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">
                ¿Qué puede generar una IA?
              </h2>

              <p>
                Los modelos generativos pueden producir distintos tipos
                de textos educativos a partir de instrucciones o prompts.
              </p>

              <ul className="text-list">
                <li>Consignas de trabajo</li>
                <li>Secuencias didácticas</li>
                <li>Cuentos educativos</li>
                <li>Evaluaciones</li>
                <li>Guías de estudio</li>
                <li>Adaptaciones curriculares</li>
              </ul>

            </div>

            <div className="col-lg-6">

              <div className="highlight-card">
                <i className="ri-file-text-line"></i>

                <h3>
                  La IA como asistente docente
                </h3>

                <p>
                  La Inteligencia Artificial permite generar borradores,
                  ideas y materiales rápidamente, reduciendo tiempos de
                  producción y facilitando la planificación.
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
              Ejemplos de uso
            </h2>
          </div>

          <div className="row g-4">

            <div className="col-lg-4">
              <div className="example-card">

                <h4>Cuento educativo</h4>

                <p>
                  Crear un cuento sobre el cuidado del ambiente para
                  estudiantes de 4° grado.
                </p>

              </div>
            </div>

            <div className="col-lg-4">
              <div className="example-card">

                <h4>Evaluación</h4>

                <p>
                  Diseñar una evaluación de Ciencias Naturales con
                  preguntas de opción múltiple.
                </p>

              </div>
            </div>

            <div className="col-lg-4">
              <div className="example-card">

                <h4>Actividad</h4>

                <p>
                  Generar una actividad colaborativa para trabajar la
                  comprensión lectora.
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
              Aprendizajes obtenidos
            </h2>

          </div>

          <div className="row g-4">

            <div className="col-md-6">
              <div className="lesson-card">

                <i className="ri-repeat-line"></i>

                <h4>Iterar mejora los resultados</h4>

                <p>
                  Un único prompt suele generar respuestas generales.
                  Refinar instrucciones y experimentar permite obtener
                  materiales más pertinentes y detallados.
                </p>

              </div>
            </div>

            <div className="col-md-6">
              <div className="lesson-card">

                <i className="ri-search-eye-line"></i>

                <h4>Revisar siempre el contenido</h4>

                <p>
                  La información generada debe ser analizada y validada
                  antes de utilizarse en contextos educativos reales.
                </p>

              </div>
            </div>

            <div className="col-md-6">
              <div className="lesson-card">

                <i className="ri-flow-chart"></i>

                <h4>Encadenar prompts</h4>

                <p>
                  Dividir tareas complejas en pasos más pequeños produce
                  resultados más consistentes y organizados.
                </p>

              </div>
            </div>

            <div className="col-md-6">
              <div className="lesson-card">

                <i className="ri-user-star-line"></i>

                <h4>El docente sigue siendo clave</h4>

                <p>
                  La IA aporta ideas y borradores, pero la selección,
                  adaptación y sentido pedagógico dependen del docente.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="cta-textos">
        <div className="container text-center">

          <h2>
            La IA no reemplaza al docente
          </h2>

          <p>
            Funciona como una herramienta de apoyo para potenciar la
            creatividad, optimizar tiempos y ampliar posibilidades.
          </p>

        </div>
      </section>
    </>
  );
}

export default Textos;