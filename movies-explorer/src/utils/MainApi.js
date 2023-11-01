import { BASE_URL } from "./Auth";

class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json()
    }
    else {
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
      .then(this._checkRes)
  }

  setUserInfo(name, email) {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(name, email)
    })
      .then(this._checkRes)
  }

  getInitialCards() {
    return fetch(`${this._url}/movies`, {
      headers: this._headers
    })
      .then(this._checkRes)
  }

  createCard({ name, link }) {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ name, link })
    })
      .then(this._checkRes)
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE'
    })
      .then(this._checkRes)
  }

  _addLikeToCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'PUT',
    })
      .then(this._checkRes)
  }

  _removeLikeFromCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then(this._checkRes)
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) { return this._addLikeToCard(cardId) }
    else { return this._removeLikeFromCard(cardId) }
  }

  updateTokenInHeaders() {
    this._headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    }
  }
}

const mainApi = new MainApi({
  url: BASE_URL,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  }
})

export default mainApi;