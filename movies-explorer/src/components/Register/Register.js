import { useEffect } from 'react';
import '../Section/Section.css';
import FormTemplate from '../FormTemplate/Formtemplate.js';
import useForm from '../../utils/useForm';
import { USERNAMEREGEX,EMAILREGEX } from '../../utils/constants';

function Register(props) {

  const { inputValues, handleChange, errors, isFormValid, resetForm } = useForm();

  useEffect(() => {
    resetForm();
  }, [resetForm])

  function handleSubmit(evt) {
    evt.preventDefault();
    props.setMessage(false);
    props.onRegisterUser({
      name: inputValues.name,
      email: inputValues.email,
      password: inputValues.password,
    });
  }

  return (
    <main className='main'>
      <FormTemplate
        title='Добро пожаловать!'
        buttonTitle='Зарегистрироваться'
        redirectLink='/signin'
        redirectText='Уже зарегистрированы?'
        redirectLinkText='Войти'
        formName='Register'
        onSubmit={handleSubmit}
        isValid={isFormValid}
        errorMessage={props.message}
        children={
          <>
            <label className='form-template__label'>Имя
              <input
                className='form-template__input'
                required
                type='text'
                name='name'
                autoComplete='on'
                minLength='2'
                maxLength='30'
                placeholder='Имя'
                pattern={USERNAMEREGEX}
                value={inputValues.name || ''}
                onChange={handleChange}
              />
            </label>
            <span className='form-template__error'>{errors.name || ''}</span>
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
          </>}
      />
    </main>
  )
}

export default Register;