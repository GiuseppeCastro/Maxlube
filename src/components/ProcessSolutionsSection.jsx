import styles from './ProcessSolutionsSection.module.css';
import corteImg from '../../images/ilustracoes/corte.png';
import oleoImg from '../../images/ilustracoes/oleo.png';
import caixasImg from '../../images/ilustracoes/caixas.png';
import trabalhadorImg from '../../images/ilustracoes/trabalhador.png';
import maosImg from '../../images/ilustracoes/maos.png';

export default function ProcessSolutionsSection() {
  return (
    <section className={styles['process-solutions-section']} aria-labelledby="process-solutions-heading">
      <div className={styles['process-solutions-container']}>
        <h2 id="process-solutions-heading" className={styles['process-solutions-heading']}>
          Soluzioni per tutti
          <br />
          i processi produttivi.
        </h2>

        {/* TOP ROW */}
        <div className={styles['process-solutions-top-row']}>
          {/* GROUP: um único card com duas imagens lado a lado */}
          <div className={styles['process-card-large-group']}>

            {/* CARD 1 — corte.png (já tem texto na imagem → sem overlay) */}
            <div className={styles['process-card-large']}>
              <img
                src={corteImg.src}
                alt="Fluidi industriali"
                className={styles['process-card-large__image']}
              />
            </div>

            {/* CARD 2 — oleo.png (não tem texto → overlay ativado) */}
            <div className={styles['process-card-large']}>
              <img
                src={oleoImg.src}
                alt="Trazione"
                className={styles['process-card-large__image']}
              />

              <div className={styles['process-card-large__overlay']}>
                <div className={styles['process-card-large__title']}>Trazione</div>
                <button type="button" className={styles['process-card-large__cta']}>
                  SCOPRI
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SMALL CARDS */}
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

        {/* CTA BUTTON */}
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
