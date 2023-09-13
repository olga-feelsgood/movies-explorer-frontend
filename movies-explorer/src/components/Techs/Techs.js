import './Techs.css';
import '../Section/Section.css';

function Techs() {
  return (
    <section className="techs section">
      <h2 className="section__title">Технологии</h2>
      <div className="techs__container">
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <ul className="techs__list">
        <li className="techs__items">
          <p className="techs__item">HTML</p>
        </li>
        <li className="techs__items">
          <p className="techs__item">CSS</p>
        </li>
        <li className="techs__items">
          <p className="techs__item">JS</p>
        </li>
        <li className="techs__items">
          <p className="techs__item">React</p>
        </li>
        <li className="techs__items">
          <p className="techs__item">Git</p>
        </li>
        <li className="techs__items">
          <p className="techs__item">Express.js</p>
        </li>
        <li className="techs__items">
          <p className="techs__item">mongoDB</p>
        </li>
      </ul>
    </section>)
}

export default Techs;