import { useEffect } from 'react';
import FormTemplate from '../FormTemplate/Formtemplate.js';
import useForm from '../../utils/useForm';
import { EMAILREGEX} from '../../utils/constants';

function Login(props) {

  const { inputValues, handleChange, errors, isFormValid, resetForm } = useForm();

  useEffect(() => {
    resetForm();
  }, [resetForm])

  function handleSubmit(evt) {
    evt.preventDefault();
    props.setMessage(false);
    props.onLoginUser({
      email: inputValues.email,
      password: inputValues.password,
    });
  }

  return (
    <main className='main'>
      <FormTemplate
        title='Рады видеть!'
        buttonTitle='Войти'
        redirectLink='/signup'
        redirectText='Еще не зарегистрированы?'
        redirectLinkText='Регистрация'
        formName='Login'
        onSubmit={handleSubmit}
        isValid={isFormValid}
        errorMessage={props.message}
        children={
          <>
            <label className='form-template__label'>E-mail
              <input
                className='form-template__input'
                required
                type='email'
                name='email'
                autoComplete='on'
                placeholder='E-mail'
                pattern={EMAILREGEX}
                value={inputValues.email || ''}
                onChange={handleChange}
              />
            </label>
            <span className='form-template__error'>{errors.email || ''}</span>
            <label className='form-template__label'>Пароль
              <input
                className='form-template__input'
                required
                type='password'
                name='password'
                autoComplete='on'
                placeholder='Пароль'
                value={inputValues.password || ''}
                onChange={handleChange}
              />
            </label>
            <span className='form-template__error'>{errors.password || ''}</span>
          </>} />
    </main>
  )
}

export default Login;