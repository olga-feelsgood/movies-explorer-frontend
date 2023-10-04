import './Promo.css';
import '../Section/Section.css';
import logoEarth from '../../images/promo-logo_Earth.svg';

function Promo() {
  return (
    <section className='promo section'>
      <div className='promo__container'>
        <h1 className='promo__title'>Учебный проект студента факультета <nobr>Веб-разработки.</nobr></h1>
        <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      </div>
      <div className='promo__logobox'>
      <img className='promo__logo' alt='Лого земной шар' src={logoEarth} />
      </div>
    </section>)
}

export default Promo;