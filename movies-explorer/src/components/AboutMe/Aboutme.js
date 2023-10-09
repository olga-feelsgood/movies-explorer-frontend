import './Aboutme.css';
import '../Section/Section.css';
import '../Link/Link.css';
import profilePhoto from '../../images/profile_photo.png';

function AboutMe() {
  return (
    <section className='about-me section'>
      <h2 className='section__title'>Студент</h2>
      <div className='about-me__wrapper'>
        <div className='about-me__container'>
          <h3 className='about-me__title'>Виталий</h3>
          <p className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a target='_blank' href='https://github.com' className='about-me__link link'>Github</a>
        </div>
        <div className='about-me__photo-container'>
          <img className='about-me__photo' alt='Фото профиля' src={profilePhoto} />
        </div>
      </div>
    </section>)
}

export default AboutMe;