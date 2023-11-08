import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import '../Section/Section.css';
import '../Link/Link.css';
import Header from '../Header/Header.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from '../../utils/useForm';
import { USERNAMEREGEX, EMAILREGEX } from '../../utils/constants';

function Profile(props) {

  const currentUser = useContext(CurrentUserContext);
  const { inputValues, handleChange, errors, isFormValid, resetForm } = useForm();

  const [isEditMode, setIsEditMode] = useState(false);
  const [isAsTheLastValue, setIsAsTheLastValue] = useState(false);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser)
    }
  }, [currentUser, resetForm])

  useEffect(() => {
    if (currentUser.name === inputValues.name && currentUser.email === inputValues.email) {
      setIsAsTheLastValue(true);
    } else {
      setIsAsTheLastValue(false);
    }
  }, [inputValues])

  function turnOnEditMode() {
    setIsEditMode(true);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.setMessage(false);
    props.onUpdateUser({
      name: inputValues.name,
      email: inputValues.email,
    });
  }

  return (
    <>
      <Header
        isLoggedIn={props.isLoggedIn} />
      <main className='profile section'>
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
        <form className='profile__form' name='profile' onSubmit={handleSubmit}>
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
                pattern={USERNAMEREGEX}
                disabled={!isEditMode}
                value={inputValues.name || ''}
                onChange={handleChange}
              />
            </label>
            <span className='profile__error'>{errors.name || ''}</span>
            <label className='profile__label'>E-mail
              <input
                className='profile__input'
                required
                type='email'
                name='email'
                autoComplete='on'
                pattern={EMAILREGEX}
                value={inputValues.email || ''}
                onChange={handleChange}
                disabled={!isEditMode}
              />
            </label>
            <span className='profile__error'>{errors.email || ''}</span>
          </fieldset>
          <div className='profile__buttons'>
            {isEditMode ?
              <>
                <span className={props.message ? 'profile__error profile__error_position_low'
                  : 'profile__error profile__error_position_low profile__error_hidden'}>{props.message}</span>
                <button className={isFormValid && !isAsTheLastValue
                  ? 'profile__save-button link'
                  : 'profile__save-button profile__save-button_disabled link'}
                  type='submit' disabled={!isFormValid || isAsTheLastValue ? true : false}>Сохранить</button>
              </>
              :
              <>
                <button className='profile__button profile__button_type_edit link' type='button' onClick={turnOnEditMode}>Редактировать</button>
                <Link to='/' className='profile__button profile__button_type_logout link' type='button' onClick={props.onSignOut}>Выйти из аккаунта</Link>
              </>
            }
          </div>
        </form>
      </main >
    </>
  )
}

export default Profile;