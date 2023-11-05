export const BASE_URL= 'https://api.movies-app.nomoredomainsmonster.ru';
// export const BASE_URL = 'http://localhost:3000/api';

function checkRes(res) {
  if (res.ok) {
    return res.json()
  }
  else {
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }
}

export function registerNewUser({ name, email, password }) {
  console.log({ name, email, password })
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(checkRes)
};

export function loginUser({ email, password }) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(checkRes)
};

export function getContent(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
    .then(checkRes)
}; 