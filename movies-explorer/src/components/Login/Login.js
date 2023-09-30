import { Link } from 'react-router-dom';
import './Login.css';
import '../Section/Section.css';
import '../Link/Link.css';

function Login() {
  return (
    <>
      <main className="login section">
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form">
          <fieldset className="login__fieldset">
            <label className="login__label">E-mail
              <input
                className="login__input"
                required
                type="email"
                name="email"
                autoComplete="on"
                defaultValue="pochta@yandex.ru"
              />
            </label>
            <span className="login__error">Пользователь с указанным email уже зарегистрирован</span>
            <label className="login__label">Пароль
              <input
                className="login__input"
                required
                type="password"
                name="password"
                autoComplete="on"
                defaultValue="••••••••••••••"
              />
            </label>
            <span className="login__error">Что-то пошло не так...</span>
          </fieldset>
          <button className="login__button" type="submit">Войти</button>
        </form>
        <p className="login__signup">Еще не зарегистрированы?
          <Link to='/signup' className="login__link link">&nbsp;Регистрация</Link>
        </p>
      </main >
    </>
  )
}

export default Login;