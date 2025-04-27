import "./About.css";
import logoSmall from "../assets/logo_small.png";

export const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-header">
          <img
            src={logoSmall}
            alt="AI Safety Dashboard"
            className="about-logo"
          />
          <h1>About AI Safety Dashboard</h1>
        </div>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            The AI Safety Dashboard is a tool designed to help track and manage
            AI safety incidents, contributing to the development of safer and
            more trustworthy artificial intelligence systems. Our mission is to
            promote transparency and accountability in AI development and
            deployment.
          </p>
        </section>

        <section className="about-section">
          <h2>Features</h2>
          <ul className="feature-list">
            <li>
              <h3>Incident Tracking</h3>
              <p>
                Monitor and log AI safety incidents with detailed information
                about their nature and severity.
              </p>
            </li>
            <li>
              <h3>Analytics</h3>
              <p>
                View statistics and trends to better understand patterns in AI
                safety incidents.
              </p>
            </li>
            <li>
              <h3>Reporting</h3>
              <p>
                Easily report new incidents with a user-friendly form and
                comprehensive categorization.
              </p>
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Contact</h2>
          <p>
            For more information about AI safety or to report issues with the
            dashboard, please contact us at:
          </p>
          <a href="mailto:safety@humanchain.ai" className="contact-link">
            safety@humanchain.ai
          </a>
        </section>

        <section className="about-section created-by">
          <div className="creator-info">
            <span className="creator-label">Created by</span>
            <span className="creator-name">Umesh</span>
          </div>
        </section>
      </div>
    </div>
  );
};
