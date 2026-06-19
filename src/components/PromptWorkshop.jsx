import { useState } from "react";

function PromptWorkshop() {

  const [recurso, setRecurso] = useState("texto");
  const [nivel, setNivel] = useState("inicial");
  const [tema, setTema] = useState("");
  const [edad, setEdad] = useState("");
  const [objetivo, setObjetivo] = useState("");

  const generarPrompt = () => {

    const prompts = {

      texto: {
        inicial: `
Actúa como docente de nivel primario.

Genera una actividad sobre ${tema} para estudiantes de ${edad} años.

Objetivo:
${objetivo}

Utiliza lenguaje sencillo y claro.
        `,
        intermedio: `
Actúa como docente especialista en educación primaria.

Diseña una actividad didáctica sobre ${tema} para estudiantes de ${edad} años.

Objetivo pedagógico:
${objetivo}

Incluye:
- Introducción
- Desarrollo
- Cierre

Utiliza lenguaje accesible.
        `,
        avanzado: `
Actúa como docente experto en diseño didáctico.

Diseña una secuencia breve sobre ${tema} para estudiantes de ${edad} años.

Objetivo:
${objetivo}

Incluye:

- Fundamentación
- Actividad inicial
- Desarrollo
- Evaluación
- Adaptaciones para diversidad

Formato profesional.
        `
      },

      imagen: {
        inicial: `
Genera una imagen educativa sobre ${tema}.

Apropiada para estudiantes de ${edad} años.

Estilo ilustración educativa.
        `,
        intermedio: `
Genera una imagen educativa para primaria.

Tema:
${tema}

Objetivo:
${objetivo}

Estilo:
Ilustración limpia.

Sin texto.

Colores brillantes.
        `,
        avanzado: `
Genera una imagen ilustrativa para material escolar.

Tema:
${tema}

Objetivo:
${objetivo}

Características:

- Ilustración educativa
- Fondo limpio
- Colores vivos
- Sin texto
- No fotorrealista
- Adecuada para estudiantes de ${edad} años

Formato horizontal.
        `
      },

      podcast: {
        inicial: `
Genera un guion breve para podcast sobre ${tema} dirigido a estudiantes de ${edad} años.
        `,
        intermedio: `
Actúa como productor educativo.

Crea un guion de podcast sobre ${tema}.

Objetivo:
${objetivo}

Duración aproximada: 3 minutos.
        `,
        avanzado: `
Diseña un podcast educativo completo.

Tema:
${tema}

Objetivo:
${objetivo}

Incluye:

- Introducción
- Desarrollo
- Preguntas reflexivas
- Cierre

Dirigido a estudiantes de ${edad} años.
        `
      },

      video: {
        inicial: `
Genera un guion para video educativo sobre ${tema}.
        `,
        intermedio: `
Diseña un video educativo sobre ${tema}.

Objetivo:
${objetivo}

Incluye escenas y narración.
        `,
        avanzado: `
Actúa como diseñador instruccional audiovisual.

Genera storyboard para video educativo.

Tema:
${tema}

Objetivo:
${objetivo}

Incluye:

- Escenas
- Narración
- Recursos visuales
- Duración sugerida
        `
      },

      web: {
        inicial: `
Diseña una experiencia interactiva sobre ${tema}.
        `,
        intermedio: `
Genera una propuesta de chatbot educativo.

Tema:
${tema}

Objetivo:
${objetivo}
        `,
        avanzado: `
Actúa como diseñador de experiencias educativas digitales.

Diseña un asistente inteligente.

Tema:
${tema}

Objetivo:
${objetivo}

Incluye:

- Funciones
- Interacciones
- Preguntas frecuentes
- Actividades sugeridas

Destinado a estudiantes de ${edad} años.
        `
      }

    };

    return prompts[recurso][nivel];

  };

  const copiarPrompt = () => {
    navigator.clipboard.writeText(generarPrompt());
  };

  return (

    <div className="prompt-workshop">

      <div className="row g-4">

        <div className="col-lg-4">

          <div className="workshop-card">

            <h4>
              Configuración
            </h4>

            <div className="mb-3">

              <label className="form-label">
                Tipo de recurso
              </label>

              <select
                className="form-select"
                value={recurso}
                onChange={(e) => setRecurso(e.target.value)}
              >
                <option value="texto">Texto</option>
                <option value="imagen">Imagen</option>
                <option value="podcast">Podcast</option>
                <option value="video">Video</option>
                <option value="web">Espacio Web</option>
              </select>

            </div>

            <div className="mb-3">

              <label className="form-label">
                Nivel
              </label>

              <select
                className="form-select"
                value={nivel}
                onChange={(e) => setNivel(e.target.value)}
              >
                <option value="inicial">Inicial</option>
                <option value="intermedio">Intermedio</option>
                <option value="avanzado">Avanzado</option>
              </select>

            </div>

            <div className="mb-3">

              <label className="form-label">
                Tema
              </label>

              <input
                type="text"
                className="form-control"
                value={tema}
                onChange={(e) => setTema(e.target.value)}
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Edad
              </label>

              <input
                type="text"
                className="form-control"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Objetivo
              </label>

              <textarea
                rows="4"
                className="form-control"
                value={objetivo}
                onChange={(e) => setObjetivo(e.target.value)}
              />
            </div>

          </div>

        </div>

        <div className="col-lg-8">

          <div className="workshop-card">

            <div className="d-flex justify-content-between align-items-center mb-3">

              <h4>
                Prompt generado
              </h4>

              <button
                className="btn btn-primary-custom"
                onClick={copiarPrompt}
              >
                <i className="ri-file-copy-line me-2"></i>
                Copiar
              </button>

            </div>

            <pre className="generated-prompt">
              {generarPrompt()}
            </pre>

          </div>

        </div>

      </div>

    </div>

  );
}

export default PromptWorkshop;