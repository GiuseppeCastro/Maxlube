import styles from './ContactExpertiseSection.module.css';
import quimicaImage from '../../images/ilustracoes/quimica.png';

export default function ContactExpertiseSection() {
  return (
    <section className={styles['contact-expertise-section']} aria-labelledby="contact-expertise-heading">
      <div className={styles['contact-expertise-card']}>
        <div className={styles['contact-expertise-image']}>
          <img src={quimicaImage.src} alt="Esperto di laboratorio" />
        </div>

        <div className={styles['contact-expertise-content']}>
          <h2 id="contact-expertise-heading" className={styles['contact-expertise-heading']}>
            Affidati alla nostra
            <br />
            competenza
          </h2>
          <p className={styles['contact-expertise-text']}>
            Conosci da vicino la nostra esperienza e scopri come
            <br />
            possiamo crescere insieme.
          </p>
          <button type="button" className={styles['contact-expertise-button']}>
            CONTATTACI
          </button>
        </div>
      </div>
    </section>
  );
}
