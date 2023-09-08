import './Promo.css';
import logoEarth from '../../images/promo_logo_Earth.png';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
      <h1 className="promo__title">Учебный проект студента факультета <nobr>Веб-разработки.</nobr></h1>
      <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      </div>
      <img className="promo__logo" alt="Лого земной шар" src={logoEarth}/>
    </section>)
}

export default Promo;