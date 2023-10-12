import FormTemplate from '../FormTemplate/Formtemplate.js';

function Login() {
  return (

    <main className='main'>
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