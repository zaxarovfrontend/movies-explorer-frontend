class Api {
    constructor(options) {
        this._headers = options.headers;
        this._url = options.url;
    }

    getUserInfo(token) {
        return fetch(`${this._url}/users/me`, {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        })
            .then(this._checkRes)
    }

    editUserData(data, token) {
        console.log(data)
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        })
            .then(this._checkRes)
    }


    _checkRes(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
}

const api = new Api({
    // url: `https://backend.nomoredomains.rocks`,
    url: `http://localhost:3000`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api
