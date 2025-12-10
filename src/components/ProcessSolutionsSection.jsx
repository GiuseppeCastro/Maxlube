import styles from './ProcessSolutionsSection.module.css';
import corteImg from '../../images/ilustraçoes/corte.png';
import oleoImg from '../../images/ilustraçoes/oleo.png';
import caixasImg from '../../images/ilustraçoes/caixas.png';
import trabalhadorImg from '../../images/ilustraçoes/trabalhador.png';
import maosImg from '../../images/ilustraçoes/maos.png';

// @2x versions of these assets are available alongside the imports above.

export default function ProcessSolutionsSection() {
  return (
    <section className={styles['process-solutions-section']} aria-labelledby="process-solutions-heading">
      <div className={styles['process-solutions-container']}>
        <h2 id="process-solutions-heading" className={styles['process-solutions-heading']}>
          Soluzioni per tutti
          <br />
          i processi produttivi.
        </h2>

        <div className={styles['process-solutions-top-row']}>
          <div className={styles['process-card-large']}>
            <img src={corteImg.src} alt="Fluidi industriali" className={styles['process-card-large__image']} />
            <div className={styles['process-card-large__overlay']}>
              <div className={styles['process-card-large__title']}>Fluidi industriali</div>
              <button type="button" className={styles['process-card-large__cta']}>
                SCOPRI
              </button>
            </div>
          </div>

          <div className={styles['process-card-large']}>
            <img src={oleoImg.src} alt="Trazione" className={styles['process-card-large__image']} />
            <div className={styles['process-card-large__overlay']}>
              <div className={styles['process-card-large__title']}>Trazione</div>
              <button type="button" className={styles['process-card-large__cta']}>
                SCOPRI
              </button>
            </div>
          </div>
        </div>

        <div className={styles['process-solutions-bottom-row']}>
          <div className={styles['process-card-small']}>
            <div className={styles['process-card-small__image-wrapper']}>
              <img
                src={caixasImg.src}
                alt="Materiale per imballaggi"
                className={styles['process-card-small__image']}
              />
            </div>
            <div className={styles['process-card-small__caption']}>
              Materiale
              <br />
              per imballaggi
            </div>
          </div>

          <div className={styles['process-card-small']}>
            <div className={styles['process-card-small__image-wrapper']}>
              <img
                src={trabalhadorImg.src}
                alt="Abbigliamento e antinfortunistica"
                className={styles['process-card-small__image']}
              />
            </div>
            <div className={styles['process-card-small__caption']}>
              Abbigliamento
              <br />
              e antinfortunistica
            </div>
          </div>

          <div className={styles['process-card-small']}>
            <div className={styles['process-card-small__image-wrapper']}>
              <img
                src={maosImg.src}
                alt="Igiene personale e ambientale"
                className={styles['process-card-small__image']}
              />
            </div>
            <div className={styles['process-card-small__caption']}>
              Igiene personale
              <br />
              e ambientale
            </div>
          </div>
        </div>

        <a className={styles['process-solutions-cta']} href="#catalogo">
          <span className={styles['process-solutions-cta__circle']}>
            <span className={styles['process-solutions-cta__arrow']} aria-hidden="true" />
          </span>
          <span className={styles['process-solutions-cta__label']}>VAI AL CATALOGO</span>
        </a>
      </div>
    </section>
  );
}
