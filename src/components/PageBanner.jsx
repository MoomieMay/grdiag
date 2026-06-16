import { Link } from "react-router-dom";

function PageBanner({ title, subtitle, image }) {
  return (
    <section
      className="hero-banner"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;