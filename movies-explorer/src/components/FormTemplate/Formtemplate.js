import './Formtemplate.css';
import '../Section/Section.css';
import '../Link/Link.css';
import Logo from '../Logo/Logo.js';
import { Link, useLocation } from 'react-router-dom';


function FormTemplate(props) {

  let { pathname } = useLocation();

  return (
    < div className='form-template' >
      <div className='form-template__container'>
        <Logo />
        <h1 className='form-template__title'>{props.title}</h1>
        <form className='form-template__form' name={props.formName}>
          <fieldset className='form-template__fieldset'>
            {props.children}
            <label className='form-template__label'>E-mail
              <input
                className='form-template__input'
                required
                type='email'
                name='email'
                autoComplete='on'
                defaultValue='pochta@yandex.ru'
                placeholder='E-mail'
              />
            </label>
            <span className='form-template__error'>Пользователь с указанным email уже зарегистрирован</span>
            <label className='form-template__label'>Пароль
              <input
                className='form-template__input'
                required
                type='password'
                name='password'
                autoComplete='on'
                defaultValue='••••••••••••••'
                placeholder='Пароль'
              />
            </label>
            <span className='form-template__error'>Что-то пошло не так...</span>
          </fieldset>
          <button className={pathname === '/signin' ?'form-template__button form-template__button_type_lower link':'form-template__button link'} type='submit'>{props.buttonTitle}</button>
        </form>
      </div>
      <p className='form-template__redirect'>{props.redirectText}
        <Link to={props.redirectLink} className='form-template__redirect-link link'>&nbsp;{props.redirectLinkText}</Link>
      </p>
    </div >
  )
}

export default FormTemplate;