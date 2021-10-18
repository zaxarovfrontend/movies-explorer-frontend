// export const BASE_URL = 'https://api.diplom.zaxarov.nomoredomains.club'
export const BASE_URL = 'http://localhost:3000'

const checkRes = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
}

export const register = (email, name, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email,name, password})
    }).then((res) => checkRes(res))
}

export const authorization = (email,password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email,password})
    }).then((res) => checkRes(res))
}

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },

    }).then((res) => checkRes(res))
}

