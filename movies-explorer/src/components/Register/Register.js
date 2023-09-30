import { Link } from 'react-router-dom';
import './Register.css';
import '../Section/Section.css';
import '../Link/Link.css';

function Register() {
  return (
    <>
      <main className="register section">
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form">
          <fieldset className="register__fieldset">
            <label className="register__label">Имя
              <input
                className="register__input"
                required
                type="text"
                name="name"
                autoComplete="on"
                minLength="2"
                maxLength="30"
                defaultValue="Виталий"
              />
            </label>
            <span className="register__error"></span>
            {/* <span className="profile__error">Переданы некорректные данные при создании пользователя</span> */}
            <label className="register__label">E-mail
              <input
                className="register__input"
                required
                type="email"
                name="email"
                autoComplete="on"
                defaultValue="pochta@yandex.ru"
              />
            </label>
            <span className="register__error">Пользователь с указанным email уже зарегистрирован</span>
            <label className="register__label">Пароль
              <input
                className="register__input"
                required
                type="password"
                name="password"
                autoComplete="on"
                defaultValue="••••••••••••••"
              />
            </label>
            <span className="register__error">Что-то пошло не так...</span>
          </fieldset>
          <button className="register__button" type="submit">Зарегистрироваться</button>
        </form>
        <p className="register__signin">Уже зарегистрированы?
          <Link to='/signin' className="register__link link">&nbsp;Вoйти</Link>
        </p>
      </main >
    </>
  )
}

export default Register;