import { useEffect, useState } from 'react';
import styles from './HeroSection.module.css';

const features = [
  {
    icon: '/images/icons/40anni.svg',
    title: '40 anni di passione',
    description: ['Ogni giorno forniamo', 'il miglior servizio possibile'],
  },
  {
    icon: '/images/icons/tecni.svg',
    title: 'Tecnici prima di tutto',
    description: ['Costruiamo il servizio', 'più idoneo al cliente'],
  },
  {
    icon: '/images/icons/fornitori.svg',
    title: 'Fornitori a 360 gradi',
    description: ['Unico riferimento per differenti', 'forniture industriali'],
  },
];

const productCategories = [
  'Fluidi Industriali',
  'Trazione',
  'Materiali per imballaggi',
  'Abbigliamento e antinfortunistica',
  'Igiene personale e ambientale',
];

export default function HeroSection() {
  const [isSticky, setIsSticky] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
      if (window.scrollY > 120) {
        setIsProductsOpen(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logoSrc = isSticky ? '/images/Logos/Logo Maxlube.png' : '/images/logo maxlube branca.png';
  const logoSrcSet = isSticky
    ? '/images/Logos/Logo Maxlube.png 1x, /images/Logos/Logo Maxlube@2x.png 2x'
    : '/images/logo maxlube branca.png 1x, /images/logo maxlube branca@2x.png 2x';

  return (
    <section className={styles.hero}>
      <div className={styles.hero__backdrop} aria-hidden="true" />
      <div className={styles.hero__inner}>
        {isSticky ? <div className={styles.hero__navSpacer} aria-hidden="true" /> : null}
        <header className={`${styles.hero__nav} ${isSticky ? styles['hero__nav--sticky'] : ''}`}>
          <div className={styles.hero__logo}>
            <img
              src={logoSrc}
              srcSet={logoSrcSet}
              alt="Maxlube"
            />
          </div>
          <nav className={styles['hero__nav-links']} aria-label="Navigazione principale">
            <a className={styles['hero__nav-link']} href="#chi-siamo">
              Chi siamo
            </a>
            <div
              className={styles.hero__navItem}
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <a
                className={`${styles['hero__nav-link']} ${isProductsOpen ? styles['hero__nav-link--active'] : ''}`}
                href="#prodotti"
                aria-haspopup="true"
                aria-expanded={isProductsOpen}
              >
                <span>Prodotti</span>
                <span
                  className={`${styles.hero__caret} ${isProductsOpen ? styles['hero__caret--open'] : ''}`}
                  aria-hidden="true"
                />
              </a>
              <div
                className={`${styles.hero__dropdown} ${isProductsOpen ? styles['hero__dropdown--open'] : ''}`}
                role="menu"
                aria-label="Prodotti"
              >
                {productCategories.map((item) => (
                  <a key={item} className={styles.hero__dropdownItem} href="#prodotti" role="menuitem">
                    <span>{item}</span>
                    <span className={styles.hero__dropdownArrow} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <a className={styles['hero__nav-link']} href="#contatti">
              Contatti
            </a>
          </nav>
          <div className={styles.hero__search} aria-hidden="true">
            <span className={styles['hero__search-icon']} />
          </div>
        </header>

        <div className={styles.hero__content}>
          <div className={styles.hero__text}>
            <h1 className={styles.hero__title}>
              Specialisti
              <br />
              della Lubrificazione
            </h1>
            <p className={styles.hero__description}>
              Siamo qui per offrirti soluzioni, prodotti e consigli
              <br />
              per tutte le tue esigenze di lubrificazione.
            </p>
            <a className={styles.hero__cta} href="#prodotti">
              <span className={styles['hero__cta-circle']}>
                <span className={styles['hero__cta-arrow']} />
              </span>
              <span className={styles['hero__cta-label']}>SCOPRI I NOSTRI PRODOTTI</span>
            </a>
          </div>
        </div>

        <div className={styles.hero__features}>
          {features.map((feature) => (
            <div className={styles.hero__feature} key={feature.title}>
              <div className={styles['hero__feature-icon']}>
                <img src={feature.icon} alt={feature.title} />
              </div>
              <div>
                <div className={styles['hero__feature-title']}>{feature.title}</div>
                <div className={styles['hero__feature-description']}>
                  {feature.description.map((line, index) => (
                    <span key={line}>
                      {line}
                      {index < feature.description.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
