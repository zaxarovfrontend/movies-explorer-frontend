export const getAllMovies = () => {
    const resPromise = fetch('https://api.nomoreparties.co/beatfilm-movies', {
        method: 'GET',
    });

    return resPromise
        .then((response) => {
            const bodyPromise = response.json();

            return bodyPromise
                .then((body) => {
                    return body;
                })
                .catch((error) => {
                    console.log('При преобразовании данных в json вознилка ошибка: ', error);
                })
        })
        .catch((error) => {
            console.log('При запросе информации о фильмах возникла ошибка: ', error);
        })
}
