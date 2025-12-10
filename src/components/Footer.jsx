export default function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-column footer-company">
            <h3 className="footer-heading">MAXLUBE SRL</h3>
            <p className="footer-text">Via Cremona, 3/A</p>
            <p className="footer-text">21049 - Tradate (VARESE)</p>
            <p className="footer-text footer-text-spaced">
              <strong>Tel:</strong> 0331 812588
            </p>
            <p className="footer-text">
              <strong>Fax:</strong> 0331 812589
            </p>
            <p className="footer-text footer-text-spaced">
              <strong>E-mail:</strong> info@maxlube.it
            </p>
            <p className="footer-text footer-text-spaced">P.I. / C.F. 03196190122</p>
          </div>

          <div className="footer-column footer-products">
            <h3 className="footer-heading">Prodotti</h3>
            <div className="footer-product-lists">
              <ul className="footer-product-list">
                <li>Lubrificazione</li>
                <li>Guide e Slitte</li>
                <li>Oli per Ingranaggi</li>
                <li>Lubrorefrigeranti</li>
                <li>Oli interi da taglio</li>
                <li>Stampaggio metalli a caldo</li>
                <li>Stampaggio metalli a freddo</li>
                <li>Pressocolata</li>
              </ul>
              <ul className="footer-product-list">
                <li>Stampaggio materie plastiche</li>
                <li>Grassi</li>
                <li>Adesivi e sigillanti</li>
                <li>Trattamenti termici</li>
                <li>Elettroerosione</li>
                <li>Additivi</li>
                <li>Lavanti</li>
                <li>Protettivi</li>
                <li>Fluidi ed oli per trazione</li>
              </ul>
              <ul className="footer-product-list">
                <li>Materiale per imballaggi</li>
                <li>Igiene personale</li>
                <li>Detergenti industriali</li>
                <li>Abbigliamento</li>
                <li>Antinfortunistica</li>
                <li>Nastri adesivi</li>
                <li>Carta</li>
                <li>Cartone</li>
                <li>Guanti</li>
              </ul>
            </div>
          </div>

          <div className="footer-column footer-links">
            <h3 className="footer-heading">Chi siamo</h3>
            <p className="footer-subheading">Contatti</p>
            <h4 className="footer-heading">Link utili</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#" className="footer-link">
                  Termini d&apos;uso
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Note legali
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Cookie policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-text">&copy; 2025 Maxlube Srl</p>
          <p className="footer-bottom-text footer-bottom-right">
            Design with love and care by{' '}
            <a href="#" className="footer-bottom-link">
              Bebit
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
