import backgroundImage from '../../images/ilustraçoes/oleo2.png';

// A 2x version of this asset (oleo2@2x.png) also exists if higher resolution is needed.

export default function MaxTifiSection() {
  return (
    <section className="max-tifi-section" aria-labelledby="max-tifi-heading">
      <div className="max-tifi-container">
        <div
          className="max-tifi-card"
          style={{ backgroundImage: `url(${backgroundImage.src})` }}
        >
          <div className="max-tifi-content">
            <h2 id="max-tifi-heading" className="max-tifi-heading">
              max tifi
            </h2>
            <p className="max-tifi-text">
              Una gamma completa di oli interi formulati con basi di alto pregio, in grado di elevare le
              prestazioni di qualsiasi processo di asportazione truciolo ad un livello superiore.
            </p>
            <button type="button" className="max-tifi-button">
              SCOPRI TUTTI I PRODOTTI
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
