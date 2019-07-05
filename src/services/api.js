const baseUrl = 'http://localhost:3001'
const signinUrl = baseUrl + '/signin'

export function signin (username, password) {
	return fetch(signinUrl, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }).then(resp => resp.json())
}

export function validate () {
    return fetch('http://localhost:3001/validate', {
	    headers: { 'Authorisation': localStorage.token }
    }).then(resp => resp.json())
}

export function getUserConcerns () {
    return fetch('http://localhost:3001/concerns', {
	    headers: { 'Authorisation': localStorage.token }
    }).then(resp => resp.json())
}

export function getConcerns () {
    return fetch('http://localhost:3001/concerns')
    .then(resp => resp.json())
}


export function createUser(username, password){ 
    return fetch('http://localhost:3001/users', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({
           username: username,
           password: password
       })
   }).then(resp => resp.json()) //

}

export function fetchConcerns() {
    return fetch()
}

export default { signin, validate, getConcerns, createUser, getUserConcerns }