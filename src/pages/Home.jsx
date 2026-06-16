import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import heroImage from "../assets/images/hero-image.jpg";

function Home() {
    return (
        <>
            <PageBanner
                title="Difracta IA"
                subtitle="Generación de contenidos educativos para nivel primario mediante Inteligencia Artificial."
                image={heroImage}
            />

            <section className="intro-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 text-center">
                            <h2 className="section-title"> Enseñar con creatividad y tecnología  </h2>

                            <p className="intro-text">
                                Difracta IA reúne herramientas de Inteligencia Artificial orientadas a la creación de recursos educativos para docentes de nivel primario.
                                Generá textos, imágenes, podcasts, videos y chatbots educativos de forma rápida y personalizada.
                            </p>


                        </div>
                    </div>
                </div>
            </section>

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

                                <h4>Imágenes</h4>

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

                                <h4>Videos y Animaciones</h4>

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

        </>
    );
}

export default Home;