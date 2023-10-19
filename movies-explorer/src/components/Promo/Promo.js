import './Promo.css';
import '../Section/Section.css';

function Promo() {
  return (
    <section className='promo section'>
      <div className='promo__container'>
        <div className='promo__box'>
          <h1 className='promo__title'>Учебный проект студента факультета <span className='promo__nohyphen'>Веб-разработки.</span></h1>
          <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
      </div>
    </section>)
}

export default Promo;