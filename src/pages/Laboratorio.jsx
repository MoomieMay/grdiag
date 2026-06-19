import { Link } from "react-router-dom";
import PromptWorkshop from "../components/PromptWorkshop";

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

      {/* INTRODUCCIÓN */}

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

      {/* CTFR */}

      <section className="section bg-light">
        <div className="container">

          <div className="text-center mb-5">

            <h2 className="section-title">
              Estructura C-T-F-R
            </h2>

            <p className="section-subtitle">
              Una estrategia simple para construir prompts efectivos.
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

      {/* TÉCNICAS */}

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

                <h4>Few-Shot Prompting</h4>

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

      {/* TÉCNICAS AVANZADAS */}

      <section className="section bg-light">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="section-title">
              Técnicas Avanzadas
            </h2>
          </div>

          <div className="row g-4">

            <div className="col-lg-3">
              <div className="lesson-card">
                <i className="ri-user-star-line"></i>
                <h4>Role Prompting</h4>
                <p>
                  Asignar un rol específico a la IA.
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="lesson-card">
                <i className="ri-flow-chart"></i>
                <h4>Chain of Thought</h4>
                <p>
                  Solicitar razonamiento paso a paso.
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="lesson-card">
                <i className="ri-file-copy-line"></i>
                <h4>Few-Shot</h4>
                <p>
                  Utilizar ejemplos para guiar respuestas.
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="lesson-card">
                <i className="ri-refresh-line"></i>
                <h4>Refinamiento</h4>
                <p>
                  Mejorar respuestas mediante nuevas indicaciones.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PLANTILLAS */}

      <section className="section">
        <div className="container">

          <div className="text-center mb-5">

            <h2 className="section-title">
              Biblioteca de Plantillas
            </h2>

            <p className="section-subtitle">
              Adaptá estas estructuras a tus necesidades.
            </p>

          </div>

          <div className="row g-4">

            <div className="col-lg-4">

              <div className="prompt-template">

                <h4>Actividad Escolar</h4>

                <div className="prompt-box large">
                  Actúa como docente de [GRADO].

                  Diseña una actividad sobre [TEMA].

                  Objetivos:
                  - [OBJETIVO 1]
                  - [OBJETIVO 2]

                  Formato:
                  [TIPO DE ACTIVIDAD]

                  Lenguaje apropiado para estudiantes de [EDAD] años.
                </div>

              </div>

            </div>

            <div className="col-lg-4">

              <div className="prompt-template">

                <h4>Evaluación</h4>

                <div className="prompt-box large">
                  Genera una evaluación sobre [TEMA].

                  Incluye:

                  - 5 preguntas múltiples
                  - 3 verdadero/falso
                  - 2 preguntas abiertas

                  Nivel:
                  [GRADO]
                </div>

              </div>

            </div>

            <div className="col-lg-4">

              <div className="prompt-template">

                <h4>Cuento Educativo</h4>

                <div className="prompt-box large">
                  Escribe un cuento para estudiantes de [EDAD].

                  Tema:
                  [TEMA]

                  Extensión:
                  [PALABRAS]

                  Debe incluir:
                  Introducción, conflicto y resolución.
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* EJEMPLOS */}

      <section className="section bg-light">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="section-title">
              Ejemplos por Área Curricular
            </h2>
          </div>

          <div className="row g-4">

            <div className="col-lg-4">
              <div className="example-card">

                <h4>Matemática</h4>

                <div className="prompt-box">
                  Actúa como docente de 5° grado.

                  Genera 10 problemas de fracciones contextualizados en situaciones cotidianas.
                </div>

              </div>
            </div>

            <div className="col-lg-4">
              <div className="example-card">

                <h4>Ciencias Naturales</h4>

                <div className="prompt-box">
                  Explica el ciclo del agua para estudiantes de 8 años utilizando ejemplos sencillos.
                </div>

              </div>
            </div>

            <div className="col-lg-4">
              <div className="example-card">

                <h4>Lengua</h4>

                <div className="prompt-box">
                  Escribe un cuento breve sobre la amistad protagonizado por animales.
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CONSTRUCTOR */}


      <section className="section">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="section-title">
              Taller de Prompts
            </h2>

            <p className="section-subtitle">
              Construí prompts educativos paso a paso.
            </p>
          </div>

          <PromptWorkshop />

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

