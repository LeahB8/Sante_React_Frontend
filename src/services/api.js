const baseUrl = "http://localhost:3001";
const signinUrl = baseUrl + "/signin";

export function signin(username, password) {
  return fetch(signinUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  }).then(resp => resp.json());
}

export function validate() {
  return fetch("http://localhost:3001/validate", {
    headers: { Authorisation: localStorage.token }
  }).then(resp => resp.json());
}

export function getUserConcerns(user) {
  return fetch(`http://localhost:3001/users/${user.id}/concerns`, {
    headers: {      
    "Content-Type": "application/json",
    Authorisation: localStorage.token }
  });
}

export function getUserGoals(user) {
  return fetch(`http://localhost:3001/users/${user.id}/goals`, {
    headers: {      
    "Content-Type": "application/json",
    Authorisation: localStorage.token }
  });
}

export function getConcerns() {
  return fetch("http://localhost:3001/concerns").then(resp => resp.json());
}

export function createUser(username, password) {
  return fetch(baseUrl + "/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(resp => resp.json());
}

export function fetchUserInfo(user) {
  return fetch(baseUrl + `/users/${user.id}`);
}

export default {
  signin,
  validate,
  getConcerns,
  createUser,
  getUserConcerns,
  fetchUserInfo,
  getUserGoals
};
