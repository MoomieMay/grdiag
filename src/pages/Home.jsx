import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";

import heroImage from "../assets/images/hero.jpeg";

// IMPORTAR FOTOS
import diana from "../assets/images/diana.jpg";
import marco from "../assets/images/marco.jpeg";
import lucia from "../assets/images/lucia.jpeg";

function Home() {
    return (
        <>
            <PageBanner
                title="Difracta IA"
                subtitle="Generación de contenidos educativos para nivel primario mediante Inteligencia Artificial."
                image={heroImage}
            />

            {/* QUIÉNES SOMOS */}

            <section className="about-section">
                <div className="container">

                    <div className="text-center mb-5">
                        <h2 className="section-title">
                            Quiénes Somos
                        </h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-9">

                            <p className="about-text">
                                Somos <strong>DIFRACTA Consultora</strong>,
                                un equipo interdisciplinario comprometido con la
                                innovación educativa, la tecnología y el diseño
                                de experiencias de aprendizaje significativas.
                            </p>

                            <p className="about-text">
                                Acompañamos a docentes e instituciones educativas
                                en la incorporación de la Inteligencia Artificial
                                Generativa mediante propuestas que combinan
                                creatividad, pensamiento crítico y sentido
                                pedagógico.
                            </p>

                        </div>
                    </div>

                </div>
            </section>

            {/* MISIÓN Y VISIÓN */}

            <section className="mission-section">
                <div className="container">

                    <div className="row g-4">

                        <div className="col-lg-6">
                            <div className="mission-card">

                                <i className="ri-compass-3-line"></i>

                                <h3>Misión</h3>

                                <p>
                                    Acompañar a docentes e instituciones educativas
                                    en la integración ética, crítica y
                                    pedagógicamente significativa de la
                                    Inteligencia Artificial Generativa,
                                    brindando recursos, estrategias y espacios
                                    de formación que favorezcan la innovación
                                    educativa y potencien experiencias de
                                    enseñanza contextualizadas, creativas y
                                    centradas en el aprendizaje.
                                </p>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="mission-card">

                                <i className="ri-eye-line"></i>

                                <h3>Visión</h3>

                                <p>
                                    Consolidarnos como una consultora referente
                                    en innovación y tecnología educativa,
                                    impulsando una cultura de transformación
                                    digital donde la Inteligencia Artificial
                                    Generativa sea utilizada de manera
                                    responsable para fortalecer las capacidades
                                    docentes y promover aprendizajes
                                    significativos.
                                </p>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* CENTRO DE RECURSOS */}

            <section className="tools-section">
                <div className="container">

                    <div className="text-center mb-5">

                        <h2 className="section-title">
                            Centro de Recursos
                        </h2>

                        <p className="section-subtitle">
                            Herramientas para diseñar experiencias educativas innovadoras.
                        </p>

                    </div>

                    <div className="row g-4">

                        <div className="col-md-6 col-lg-4">
                            <Link to="/textos" className="tool-card">

                                <div className="tool-icon">
                                    <i className="ri-file-text-line"></i>
                                </div>

                                <h4>Textos</h4>

                                <p>
                                    Actividades, secuencias didácticas, cuentos,
                                    consignas y evaluaciones.
                                </p>

                            </Link>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <Link to="/imagenes" className="tool-card">

                                <div className="tool-icon">
                                    <i className="ri-image-line"></i>
                                </div>

                                <h4>Imágenes y Animaciones</h4>

                                <p>
                                    Recursos visuales, ilustraciones y materiales
                                    gráficos educativos.
                                </p>

                            </Link>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <Link to="/podcast" className="tool-card">

                                <div className="tool-icon">
                                    <i className="ri-mic-line"></i>
                                </div>

                                <h4>Podcast</h4>

                                <p>
                                    Audios educativos para diferentes áreas
                                    curriculares.
                                </p>

                            </Link>
                        </div>

                        <div className="col-md-6 col-lg-6">
                            <Link to="/videos" className="tool-card">

                                <div className="tool-icon">
                                    <i className="ri-video-line"></i>
                                </div>

                                <h4>Videos</h4>

                                <p>
                                    Material audiovisual para potenciar el aprendizaje.
                                </p>

                            </Link>
                        </div>

                        <div className="col-md-6 col-lg-6">
                            <Link to="/chatbots" className="tool-card">

                                <div className="tool-icon">
                                    <i className="ri-robot-2-line"></i>
                                </div>

                                <h4>Chatbots</h4>

                                <p>
                                    Asistentes virtuales para acompañar procesos educativos.
                                </p>

                            </Link>
                        </div>

                    </div>

                </div>
            </section>

            {/* EQUIPO */}

            <section className="team-section">
                <div className="container">

                    <div className="text-center mb-5">

                        <h2 className="section-title">
                            Nuestro Equipo
                        </h2>

                        <p className="section-subtitle">
                            Un equipo interdisciplinario comprometido con la innovación educativa.
                        </p>

                    </div>

                    <div className="row g-4">

                        <div className="col-lg-4">
                            <div className="team-card">

                                <img src={diana} alt="Diana Pérez" />

                                <h4>Diana Pérez</h4>

                                <p>
                                    Diseña soluciones que optimizan la gestión
                                    institucional y democratizan el acceso a la
                                    información, integrando tecnología y sensibilidad artística.
                                </p>

                                <a
                                    href="https://www.linkedin.com/in/diana-lorena-perez/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="team-link"
                                >
                                    <i className="ri-linkedin-box-fill"></i>
                                    {" "}LinkedIn
                                </a>

                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="team-card">

                                <img src={marco} alt="Marco Tamborini" />

                                <h4>Marco Tamborini</h4>

                                <p>
                                    Especialista en herramientas digitales,
                                    infraestructura tecnológica y optimización
                                    de recursos para proyectos educativos.
                                </p>

                                <a
                                    href="http://www.linkedin.com/in/marco-alexander-tamborini-2a6bbb182"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="team-link"
                                >
                                    <i className="ri-linkedin-box-fill"></i>
                                    {" "}LinkedIn
                                </a>

                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="team-card">

                                <img src={lucia} alt="Lucía Vega" />

                                <h4>Lucía Vega</h4>

                                <p>
                                    Diseña propuestas que integran tecnología
                                    con sentido pedagógico para promover
                                    experiencias educativas inclusivas y significativas.
                                </p>

                                <a
                                    href="http://www.linkedin.com/in/luc%C3%ADa-vega-826aa4264"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="team-link"
                                >
                                    <i className="ri-linkedin-box-fill"></i>
                                    {" "}LinkedIn
                                </a>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* CTA */}

            <section className="cta-section">
                <div className="container text-center">

                    <h2>
                        Transformemos juntos la educación
                    </h2>

                    <p>
                        Explorá recursos, herramientas y experiencias para
                        integrar la Inteligencia Artificial Generativa en el aula.
                    </p>

                    <Link
                        to="/textos"
                        className="btn btn-primary-custom"
                    >
                        Comenzar ahora
                    </Link>

                </div>
            </section>

        </>
    );
}

export default Home;