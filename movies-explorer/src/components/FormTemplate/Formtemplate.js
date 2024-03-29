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
        <form className='form-template__form' name={props.formName} onSubmit={props.onSubmit}>
          <fieldset className='form-template__fieldset'>
            {props.children}
          </fieldset>
          <>
            {props.errorMessage ? <span className={pathname === '/signin' ? 'form-template__server-error form-template__server-error_type_lower' : 'form-template__server-error'}>{props.errorMessage}</span> : <span className='form-template__server-error form-template__server-error_hidden'></span>}
            <button className={`form-template__button link ${!props.isValid && 'form-template__button_disabled'}`} type='submit' disabled={!props.isValid}>{props.buttonTitle}</button>
          </>
        </form>
      </div>
      <p className='form-template__redirect'>{props.redirectText}
        <Link to={props.redirectLink} className='form-template__redirect-link link'>&nbsp;{props.redirectLinkText}</Link>
      </p>
    </div >
  )
}

export default FormTemplate;