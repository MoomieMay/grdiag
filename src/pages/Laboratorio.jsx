import { Link } from "react-router-dom";

function Laboratorio() {
  return (
    <>
      <section className="page-header">
        <div className="container">

          <h1>
            Laboratorio de Prompts
          </h1>

          <p>
            Aprendé a diseñar prompts efectivos para obtener mejores
            resultados con herramientas de Inteligencia Artificial
            Generativa aplicadas a la educación.
          </p>

        </div>
      </section>

      {/* Introducción */}

      <section className="section">
        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <h2 className="section-title">
                ¿Qué es un Prompt?
              </h2>

              <p>
                Un prompt es la instrucción que proporcionamos a una
                herramienta de Inteligencia Artificial para solicitar
                una tarea, información o contenido.
              </p>

              <p>
                Cuanto más claro, específico y contextualizado sea el
                prompt, mejores serán los resultados obtenidos.
              </p>

            </div>

            <div className="col-lg-6">

              <div className="highlight-card">

                <i className="ri-lightbulb-flash-line"></i>

                <h3>
                  Regla fundamental
                </h3>

                <p>
                  La calidad de la respuesta depende en gran medida de
                  la calidad del prompt.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Estructura */}

      <section className="section bg-light">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="section-title">
              Estructura C-T-F-R
            </h2>

            <p className="section-subtitle">
              Una estrategia simple para construir prompts más efectivos.
            </p>
          </div>

          <div className="row g-4">

            <div className="col-md-6 col-lg-3">
              <div className="lesson-card">
                <i className="ri-user-line"></i>
                <h4>Contexto</h4>
                <p>
                  Quién eres, para quién es el recurso y en qué situación será utilizado.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="lesson-card">
                <i className="ri-task-line"></i>
                <h4>Tarea</h4>
                <p>
                  Explicar claramente qué debe hacer la IA.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="lesson-card">
                <i className="ri-file-list-3-line"></i>
                <h4>Formato</h4>
                <p>
                  Indicar cómo debe presentarse la respuesta.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="lesson-card">
                <i className="ri-forbid-line"></i>
                <h4>Restricciones</h4>
                <p>
                  Especificar aquello que no debe incluirse.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Técnicas */}

      <section className="section">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="section-title">
              Técnicas de Prompt Engineering
            </h2>
          </div>

          <div className="row g-4">

            <div className="col-lg-4">
              <div className="example-card">

                <h4>Role Prompting</h4>

                <p>
                  Pedir a la IA que asuma un rol específico.
                </p>

                <div className="prompt-box">
                  Actúa como docente de Ciencias Naturales de 5° grado.
                </div>

              </div>
            </div>

            <div className="col-lg-4">
              <div className="example-card">

                <h4>Prompt por Objetivo</h4>

                <p>
                  Indicar claramente el resultado esperado.
                </p>

                <div className="prompt-box">
                  Diseña una actividad para comprender el ciclo del agua.
                </div>

              </div>
            </div>

            <div className="col-lg-4">
              <div className="example-card">

                <h4>Few Shot Prompting</h4>

                <p>
                  Proporcionar ejemplos previos para guiar la respuesta.
                </p>

                <div className="prompt-box">
                  Ejemplo 1... Ejemplo 2... Ahora genera uno similar.
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Plantillas */}

      <section className="section bg-light">
        <div className="container">

          <div className="text-center mb-5">

            <h2 className="section-title">
              Plantillas de Prompts
            </h2>

          </div>

          <div className="row g-4">

            <div className="col-lg-6">
              <div className="prompt-template">

                <h4>
                  Generación de Texto
                </h4>

                <div className="prompt-box large">

                  Actúa como docente de [ÁREA].
                  <br />
                  Diseña una actividad para estudiantes de [EDAD].
                  <br />
                  Tema: [TEMA].
                  <br />
                  Formato: [TIPO DE ACTIVIDAD].
                  <br />
                  Utiliza lenguaje claro y adecuado para el nivel.

                </div>

              </div>
            </div>

            <div className="col-lg-6">
              <div className="prompt-template">

                <h4>
                  Generación de Imágenes
                </h4>

                <div className="prompt-box large">

                  Genera una imagen ilustrativa para una fotocopia escolar
                  sobre [TEMA].
                  <br />
                  Estilo: ilustración educativa limpia.
                  <br />
                  Colores brillantes.
                  <br />
                  Fondo blanco o neutro.
                  <br />
                  Que se vea: [DESCRIPCIÓN].
                  <br />
                  Sin texto.
                  <br />
                  Sin fotorrealismo.
                  <br />
                  Apropiada para estudiantes de [EDAD].
                  <br />
                  Formato: cuadrado.

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Ejemplo completo */}

      <section className="section">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="section-title">
              Ejemplo Completo
            </h2>
          </div>

          <div className="prompt-example">

            <h4>
              Prompt para crear una imagen educativa
            </h4>

            <div className="prompt-box large">

              Genera una imagen ilustrativa para usar en una fotocopia
              escolar sobre el ciclo del agua.
              Estilo: ilustración educativa limpia, colores brillantes,
              fondo blanco.
              Que se vea: un sol, nubes, lluvia cayendo sobre una montaña,
              un río y el mar.
              Sin texto.
              Sin fotorrealismo.
              Apropiada para niños de 8 años.
              Formato cuadrado.

            </div>

          </div>

        </div>
      </section>

      <section className="cta-textos">
        <div className="container text-center">

          <h2>
            Experimentá y mejorá tus prompts
          </h2>

          <p>
            La práctica constante permite obtener resultados más precisos,
            creativos y adaptados a las necesidades educativas.
          </p>


        </div>
      </section>

    </>
  );
}

export default Laboratorio;