import { Link } from "react-router-dom";

function Imagenes() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>
            Imágenes y Animaciones
          </h1>

          <p>
            La IA permite crear ilustraciones, personajes, escenas y
            animaciones educativas que facilitan la comprensión de
            contenidos y enriquecen las experiencias de aprendizaje.
          </p>

        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="row g-5 align-items-center">

            <div className="col-lg-6">

              <h2 className="section-title">
                Del texto a la imagen
              </h2>

              <p>
                Los modelos generativos transforman descripciones
                escritas en recursos visuales capaces de representar
                conceptos, personajes, escenarios y situaciones de
                aprendizaje.
              </p>

              <p>
                En este proyecto se diseñó una secuencia audiovisual
                protagonizada por Rodolfo, un personaje infantil creado
                para acompañar una propuesta educativa destinada a
                estudiantes de primer grado.
              </p>

            </div>

            <div className="col-lg-6">

              <div className="highlight-card">

                <i className="ri-image-2-line"></i>

                <h3>
                  Narrar mediante imágenes
                </h3>

                <p>
                  Las imágenes generadas con IA permiten construir
                  relatos visuales atractivos, favoreciendo la atención,
                  la comprensión y la motivación de los estudiantes.
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
                  Diseño de prompts descriptivos y planificación
                  narrativa de las escenas.
                </p>

              </div>
            </div>

            <div className="col-md-4">
              <div className="example-card">

                <h4>CapCut IA</h4>

                <p>
                  Generación inicial de escenas visuales y pruebas
                  de animación mediante inteligencia artificial.
                </p>

              </div>
            </div>

            <div className="col-md-4">
              <div className="example-card">

                <h4>Google Vids</h4>

                <p>
                  Producción final de la animación integrando
                  movimiento, narración y continuidad visual.
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
              Proceso creativo
            </h2>
          </div>

          <div className="row g-4">

            <div className="col-md-6 col-lg-3">
              <div className="lesson-card">

                <i className="ri-lightbulb-line"></i>

                <h4>1. Idea</h4>

                <p>
                  Definir el objetivo pedagógico y el personaje
                  principal de la historia.
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="lesson-card">

                <i className="ri-quill-pen-line"></i>

                <h4>2. Prompts</h4>

                <p>
                  Crear instrucciones detalladas para describir
                  escenarios, acciones y emociones.
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="lesson-card">

                <i className="ri-image-edit-line"></i>

                <h4>3. Imágenes</h4>

                <p>
                  Generar y ajustar escenas manteniendo la identidad
                  visual del personaje.
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="lesson-card">

                <i className="ri-movie-line"></i>

                <h4>4. Animación</h4>

                <p>
                  Integrar las secuencias para construir un producto
                  audiovisual coherente.
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

                <h4>La iteración es fundamental</h4>

                <p>
                  Los mejores resultados surgieron después de múltiples
                  ajustes y refinamientos de los prompts visuales.
                </p>

              </div>
            </div>

            <div className="col-md-6">
              <div className="lesson-card">

                <i className="ri-user-heart-line"></i>

                <h4>La coherencia visual requiere control</h4>

                <p>
                  Mantener la identidad del personaje a lo largo de
                  distintas escenas demandó decisiones constantes.
                </p>

              </div>
            </div>

            <div className="col-md-6">
              <div className="lesson-card">

                <i className="ri-links-line"></i>

                <h4>Articular herramientas mejora el resultado</h4>

                <p>
                  La combinación de distintas plataformas permitió
                  superar limitaciones individuales y obtener un
                  producto más completo.
                </p>

              </div>
            </div>

            <div className="col-md-6">
              <div className="lesson-card">

                <i className="ri-graduation-cap-line"></i>

                <h4>La intención pedagógica guía el diseño</h4>

                <p>
                  El valor educativo no depende de la tecnología,
                  sino de las decisiones tomadas durante el proceso.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="cta-textos">
        <div className="container text-center">

          <h2>
            Crear imágenes es solo el comienzo
          </h2>

          <p>
            Las herramientas de IA permiten avanzar hacia experiencias
            audiovisuales completas donde imagen, movimiento y narrativa
            trabajan conjuntamente para enseñar.
          </p>

        </div>
      </section>
    </>
  );
}

export default Imagenes;