import { useState } from 'react';
import './Profile.css';
import '../Section/Section.css';
import '../Link/Link.css';
import Header from '../Header/Header.js';

function Profile() {

  const [isEditMode, setIsEditMode] = useState(false);

  const [isButtonAble, setIsButtonAble] = useState(false);

  function turnOnEditMode() {
    setIsEditMode(true);
  }


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
                disabled={!isEditMode}
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
                disabled={!isEditMode}
              />
            </label>
            <span className='profile__error'>Пользователь с указанным email уже зарегистрирован</span>
          </fieldset>
          <div className='profile__buttons'>
            {isEditMode ?
              <>
                <span className={!isButtonAble ? 'profile__error profile__error_position_low': 'profile__error profile__error_position_low profile__error_hidden'}>При обновлении профиля произошла ошибка</span>
                <button className={isButtonAble ? 'profile__save-button link' : 'profile__save-button profile__save-button_disabled link'} type='submit'>Сохранить</button>
              </>
              :
              <>
                <button className='profile__button profile__button_type_edit link' type='button' onClick={turnOnEditMode}>Редактировать</button>
                <button className='profile__button profile__button_type_logout link' type='button'>Выйти из аккаунта</button>
              </>
            }
          </div>
        </form>
      </main >
    </>
  )
}

export default Profile;