import '../Section/Section.css';
import FormTemplate from '../FormTemplate/Formtemplate.js';

function Register() {
  return (
    <main className='main'>
      <FormTemplate
        title='Добро пожаловать!'
        buttonTitle='Зарегистрироватться'
        redirectLink='/signin'
        redirectText='Уже зарегистрированы?'
        redirectTextLink='Войти'
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
                defaultValue='Виталий'
              />
            </label>
            <span className='form-template__error'></span>
          </>}
      />
    </main>
  )
}

export default Register;