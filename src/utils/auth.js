export const BASE_URL = 'https://api.diplom.zaxarov.nomoredomains.club'
// export const BASE_URL = 'http://localhost:3000'



const checkRes = (res) => {
    return res.ok ? res.json() : Promise.reject(res.json())
}

/**
 * Регистрация нового пользователя
 * */
export const register = (name,email,password) => {
    const requestResultPromise = fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
    })

    return requestResultPromise.then((res) => checkRes(res));
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
         if( !token) {
           return Promise.reject()
         }

         const pr = fetch(`${BASE_URL}/users/me`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

         return pr;
}

