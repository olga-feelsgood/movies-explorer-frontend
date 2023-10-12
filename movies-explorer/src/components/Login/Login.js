import '../Section/Section.css';
import FormTemplate from '../FormTemplate/Formtemplate.js';

function Login() {
  return (

    <main className='section'>
      <FormTemplate
        title='Рады видеть!'
        buttonTitle='Войти'
        redirectLink='/signup'
        redirectText='Еще не зарегистрированы?'
        redirectLinkText='Регистрация' />
    </main>
  )
}

export default Login;