import premios from '../../images/ilustraçoes/premios.png';

export default function CertificationsSection() {
  return (
    <section className="certifications-section" aria-labelledby="certifications-heading">
      <div className="certifications-container">
        <h2 id="certifications-heading" className="certifications-heading">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </h2>
        <p className="certifications-text">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <img src={premios.src} alt="Certificazioni ISO" className="certifications-image" />
      </div>
    </section>
  );
}
