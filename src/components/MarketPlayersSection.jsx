import styles from './MarketPlayersSection.module.css';

const topLogos = [
  { src: '/images/Logos/quaker-houghton.png', alt: 'Quaker Houghton' },
  { src: '/images/Logos/enilive-lubrificanti.png', alt: 'Enilive Lubrificanti' },
  { src: '/images/Logos/images.png', alt: 'Q8 Oils' },
  { src: '/images/Logos/qualichem.png', alt: 'Qualichem' },
];

export default function MarketPlayersSection() {
  return (
    <section className={styles['market-players']}>
      <div className={styles['market-players__inner']}>
        <h2 className={styles['market-players__heading']}>
          Trattiamo con i principali player del mercato
        </h2>
        <p className={styles['market-players__subheading']}>Scopri i migliori prodotti</p>

        <div className={styles['market-players__top-row']}>
          {topLogos.map((logo) => (
            <div className={styles['market-players__logo']} key={logo.alt}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>

        <div className={styles['market-players__bottom-row']}>
          <img src="/images/Logos/Raggruppa%20214.png" alt="Partner logos" />
        </div>
      </div>
    </section>
  );
}
