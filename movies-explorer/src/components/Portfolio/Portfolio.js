import './Portfolio.css';
import '../Link/Link.css';
import '../Section/Section.css';

function Portfolio() {
  return (
    <section className='portfolio section'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__links'>
          <a target='_blank' href='https://github.com/olga-feelsgood/how-to-learn' className='portfolio__link link' rel='noreferrer'>Статичный сайт</a>
        </li>
        <li className='portfolio__links'>
          <a target='_blank' href='https://github.com/olga-feelsgood/russian-travel' className='portfolio__link link' rel='noreferrer'>Адаптивный сайт</a>
        </li>
        <li className='portfolio__links'>
          <a target='_blank' href='https://github.com/olga-feelsgood/react-mesto-api-full-gha' className='portfolio__link link' rel='noreferrer'>Одностраничное приложение</a>
        </li>
      </ul>
    </section>)
}

export default Portfolio;