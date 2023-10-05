import './Profile.css';
import '../Section/Section.css';
import Header from '../Header/Header.js';

function Profile() {
  return (
    <>
      <Header />
      <main className='profile section'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form className='profile__form'>
          <fieldset className='profile__fieldset'>
            <label className='profile__label'>Имя
              <input
                className='profile__input'
                required
                type='text'
                name='name'
                autoComplete='on'
                minLength='2'
                maxLength='30'
                defaultValue='Виталий'
              />
            </label>
            <span className='profile__error'></span>
            {/* <span className='profile__error'>Переданы некорректные данные при создании пользователя</span> */}
            <label className='profile__label'>E-mail
              <input
                className='profile__input'
                required
                type='email'
                name='email'
                autoComplete='on'
                defaultValue='pochta@yandex.ru'
              />
            </label>
            <span className='profile__error'>Пользователь с указанным email уже зарегистрирован</span>
          </fieldset>
          <div className='profile__buttons'>
            <button className='profile__button-edit' type='submit'>Редактировать</button>
            <button className='profile__button-logout' type='submit'>Выйти из аккаунта</button>
          </div>
        </form>
      </main >
    </>
  )
}

export default Profile;