import './Portfolio.css';
import '../Link/Link.css';
import '../Section/Section.css';
import portfolioArrow from '../../images/portfolio_arrow.png';

function Portfolio() {
  return (
    <section className='portfolio section'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__links'>
          <a target='_blank' href='https://github.com' className='portfolio__link link' rel='noreferrer'>Статичный сайт</a>
          <a target='_blank' href='https://github.com' className='link' rel='noreferrer'>
            <img className='portfolio__arrow' alt='Стрелка' src={portfolioArrow} />
          </a>
        </li>
        <li className='portfolio__links'>
          <a target='_blank' href='https://github.com' className='portfolio__link link' rel='noreferrer'>Адаптивный сайт</a>
          <a target='_blank' href='https://github.com' className='link' rel='noreferrer'>
            <img className='portfolio__arrow' alt='Стрелка' src={portfolioArrow} />
          </a>
        </li>
        <li className='portfolio__links'>
          <a target='_blank' href='https://github.com' className='portfolio__link link' rel='noreferrer'>Одностраничное приложение</a>
          <a target='_blank' href='https://github.com' className='link' rel='noreferrer'>
            <img className='portfolio__arrow' alt='Стрелка' src={portfolioArrow} />
          </a>
        </li>
      </ul>
    </section>)
}

export default Portfolio;