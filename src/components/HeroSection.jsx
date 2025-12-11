import { useCallback, useEffect, useRef, useState } from 'react';
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
  { label: 'Fluidi Industriali', href: '#fluidi-industriali' },
  { label: 'Trazione', href: '#trazione' },
  { label: 'Materiali per imballaggi', href: '#materiali-per-imballaggi' },
  { label: 'Abbigliamento e antinfortunistica', href: '#abbigliamento-e-antinfortunistica' },
  { label: 'Igiene personale e ambientale', href: '#igiene-personale-e-ambientale' },
];

const mobileMenuLinks = [
  { label: 'Chi siamo', href: '#chi-siamo' },
  { label: 'Prodotti', href: '#prodotti' },
  ...productCategories,
  { label: 'Contatti', href: '#contatti' },
];

export default function HeroSection() {
  const heroRef = useRef(null);
  const navRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const updateNavHeight = useCallback(() => {
    if (heroRef.current && navRef.current) {
      const navHeight = navRef.current.offsetHeight;
      heroRef.current.style.setProperty('--nav-height', `${navHeight}px`);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sticky = window.scrollY > 40;
      setIsSticky(sticky);
      updateNavHeight();
      if (window.scrollY > 120) {
        setIsProductsOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [updateNavHeight]);

  useEffect(() => {
    const handleResize = () => {
      updateNavHeight();
      if (window.innerWidth > 960 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen, updateNavHeight]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    updateNavHeight();
  }, [isSticky, updateNavHeight]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((open) => !open);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const logoSrc = isSticky ? '/images/Logos/Logo Maxlube.png' : '/images/logo maxlube branca.png';
  const logoSrcSet = isSticky
    ? '/images/Logos/Logo Maxlube.png 1x, /images/Logos/Logo Maxlube@2x.png 2x'
    : '/images/logo maxlube branca.png 1x, /images/logo maxlube branca@2x.png 2x';

  return (
    <section ref={heroRef} className={`${styles.hero} ${isSticky ? styles['hero--sticky'] : ''}`}>
      <div className={styles.hero__backdrop} aria-hidden="true" />
      <div className={styles.hero__inner}>
        {isSticky ? <div className={styles.hero__navSpacer} aria-hidden="true" /> : null}
        <header ref={navRef} className={`${styles.hero__nav} ${isSticky ? styles['hero__nav--sticky'] : ''}`}>
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
                  <a key={item.label} className={styles.hero__dropdownItem} href={item.href} role="menuitem">
                    <span>{item.label}</span>
                    <span className={styles.hero__dropdownArrow} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <a className={styles['hero__nav-link']} href="#contatti">
              Contatti
            </a>
          </nav>
          <button
            type="button"
            className={`${styles.hero__menuToggle} ${isMobileMenuOpen ? styles['hero__menuToggle--open'] : ''}`}
            aria-label={isMobileMenuOpen ? 'Chiudi il menu' : 'Apri il menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="hero-mobile-menu"
            onClick={toggleMobileMenu}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={styles.hero__search} aria-hidden="true">
            <span className={styles['hero__search-icon']} />
          </div>
        </header>

        <div
          className={`${styles.hero__mobileBackdrop} ${isMobileMenuOpen ? styles['hero__mobileBackdrop--visible'] : ''}`}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
        <div
          id="hero-mobile-menu"
          className={`${styles.hero__mobileMenu} ${isMobileMenuOpen ? styles['hero__mobileMenu--visible'] : ''}`}
        >
          <nav className={styles.hero__mobileNav} aria-label="Navigazione mobile">
            <ul className={styles.hero__mobileList}>
              {mobileMenuLinks.map((item) => (
                <li key={item.label}>
                  <a className={styles.hero__mobileLink} href={item.href} onClick={closeMobileMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

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
