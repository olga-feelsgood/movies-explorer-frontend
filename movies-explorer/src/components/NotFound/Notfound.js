import './Notfound.css';
import '../Section/Section.css';
import '../Link/Link.css';

function NotFound() {
  return (
    <>
      <main className="notfound section">
        <h1 className="notfound__title">404</h1>
        <p className="notfound__text">Страница не найдена</p>
        <p className="notfound__link link">Назад</p>
      </main >
    </>
  )
}

export default NotFound;