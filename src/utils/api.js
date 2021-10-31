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

    getAllLikedMovie(token) {
        const pr = fetch(`${this._url}/movies`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        });

        return pr
          .then((data) => {
              if (data.ok) {
                  return data.json();
              }

              return Promise.reject();
          })
          .catch((err) => {
              return Promise.reject();
          })
    }

    saveLikedMovie(movie, token) {
        const pr = fetch(`${this._url}/movies`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify({
                country: movie.country || "данные отсутствуют",
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: 'https://api.nomoreparties.co/beatfilm-movies' + movie.image.url,
                trailer: movie.trailerLink,
                nameRU: movie.nameRU || "Фильм не имеет русского имени",
                nameEN: movie.nameEN || "Фильм не имеет английского имени",
                thumbnail: 'https://api.nomoreparties.co/beatfilm-movies' + movie.image.formats.thumbnail.url,
                movieId: movie.id,
            }),
        });

        return pr
          .then((data) => {
              if (data.ok) {
                  return data.json();
              }

              return Promise.reject();
          })
          .catch((err) => {
              return Promise.reject();
          })
    }

    deleteLikedMovie(movieId, token) {
        console.log('movieId', movieId)
        const pr = fetch(`${this._url}/movies/${movieId}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        });

        return pr
          .then((data) => {
              if (data.ok) {
                  return data.json();
              }

              return Promise.reject();
          })
          .catch((err) => {
              return Promise.reject();
          })
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

export default api;
