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

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__backdrop} aria-hidden="true" />
      <div className={styles.hero__inner}>
        <header className={styles.hero__nav}>
          <div className={styles.hero__logo}>
            <img
              src="/images/logo maxlube branca.png"
              srcSet="/images/logo maxlube branca.png 1x, /images/logo maxlube branca@2x.png 2x"
              alt="Maxlube"
            />
          </div>
          <nav className={styles['hero__nav-links']} aria-label="Navigazione principale">
            <a className={styles['hero__nav-link']} href="#chi-siamo">
              Chi siamo
            </a>
            <a className={styles['hero__nav-link']} href="#prodotti">
              <span>Prodotti</span>
              <span className={styles.hero__caret} aria-hidden="true" />
            </a>
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
