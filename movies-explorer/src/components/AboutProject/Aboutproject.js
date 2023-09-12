import './Aboutproject.css';
import '../Section/Section.css';

function AboutProject() {
  return (
    <section className="about-project section">
      <h2 className="section__title">О проекте</h2>
      <div className="about-project__wrapper">
        <div className="about-project__container">
          <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__container">
          <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__time-line">
        <div className="about-project__time-block about-project__time-block_size_small">
          <p className="about-project__time">1 неделя</p>
          <p className="about-project__caption">Back-end</p>
        </div>
        <div className="about-project__time-block about-project__time-block_size_big">
          <p className="about-project__time about-project__time-block_color_grey">4 недели</p>
          <p className="about-project__caption">Front-end</p>
        </div>
      </div>
    </section>)
}

export default AboutProject;