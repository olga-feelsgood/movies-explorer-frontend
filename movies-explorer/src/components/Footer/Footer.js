import './Footer.css';
import '../Link/Link.css';
import '../Section/Section.css';

function Footer() {
  return (
    <footer className="footer section">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__copyright">&copy;2023</p>
        <nav className="footer__menu">
          <ul className="footer__links">
            <li>
              <a target="_blank" href="https://practicum.yandex.ru" className="footer__link link">Яндекс.Практиткум</a>
            </li>
            <li>
              <a target="_blank" href="https://github.com" className="footer__link link">GitHub</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>)
}

export default Footer;