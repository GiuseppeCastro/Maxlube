import styles from './SustainabilitySection.module.css';
import productImg from '../../images/ilustracoes/produto.png';
import gearsImg from '../../images/ilustracoes/engrenagens.png';

export default function SustainabilitySection() {
  return (
    <section className={styles['sustainability-section']} aria-labelledby="sustainability-heading">
      <div className={styles['sustainability-container']}>
        <div className={styles['sustainability-layout']}>
          <div className={styles['sustainability-images']}>
            <div
              className={`${styles['sustainability-image-wrapper']} ${styles['sustainability-image--small']}`}
            >
              <img src={productImg.src} alt="Prodotto Maxlube" />
            </div>
            <div
              className={`${styles['sustainability-image-wrapper']} ${styles['sustainability-image--large']}`}
            >
              <img src={gearsImg.src} alt="Ingranaggi lubrificati" />
            </div>
          </div>

          <div className={styles['sustainability-text']}>
            <h2 id="sustainability-heading" className={styles['sustainability-heading']}>
              La nostra
              <br />
              formula
              <br />
              per la vera
              <br />
              sostenibilità
            </h2>

            <p className={styles['sustainability-description']}>
              Il nostro obiettivo è ridurre gli smaltimenti
              <br />
              incrementando l’efficienza dei processi
              <br />
              produttivi abbinando:
            </p>

            <ul className={styles['sustainability-list']}>
              <li>
                Prodotti stabili e di qualità, formulati con materie prime in linea con le ultime normative in tema di
                salute e sicurezza.
              </li>
              <li>Monitoraggio ed assistenza tecnica in loco ed in laboratorio.</li>
              <li>Attrezzature dedicate come filtri magnetici, disoleatori, miscelatori, impianti di osmosi.</li>
            </ul>

            <a className={styles['sustainability-cta']} href="#prodotti">
              <span className={styles['sustainability-cta__circle']} aria-hidden="true">
                <span className={styles['sustainability-cta__arrow']}>&gt;</span>
              </span>
              <span className={styles['sustainability-cta__label']}>SCOPRI I NOSTRI PRODOTTI</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
