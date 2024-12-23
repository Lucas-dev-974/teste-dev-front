import { PartnersLogos } from "./PartnersLogo";
import "./Partners.css";

export function Partners() {
  return (
    <section className="partners-section">
      <div className="grid-container">
        {PartnersLogos.map((LogoComponent, index) => (
          <div key={index} className="logo-item">
            <LogoComponent />
          </div>
        ))}
      </div>
    </section>
  );
}
