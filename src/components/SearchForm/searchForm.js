import React, { useState } from 'react';
import './searchForm.css';
import FilterCheckbox from "../FilterCheckbox/filterCheckbox";

import { useForm } from '../../Validation/UseForm';

import { getAllMovies } from '../../utils/MoviesApi';

import { complexMoviesFilter } from '../../utils/movies-filter';

function SearchForm({ setMovies, setPreloaderStatus, setSearchProblemMessage }) {
    const { values, handleChange } = useForm();
    const [shortMoviesFilter, setShortMoviesFilter] = useState(false);

    function handleSubmit(evt) {
        evt.preventDefault();

        const moviesFromLocalStorageString = localStorage.getItem('movies');

        if (moviesFromLocalStorageString) {
            const parsedMovies = JSON.parse(moviesFromLocalStorageString);
            const filteredMovies = complexMoviesFilter(parsedMovies, values.search, shortMoviesFilter);

            if (filteredMovies.length === 0) {
                setSearchProblemMessage('Ничего не найдено');
            }

            setMovies(filteredMovies);
        } else {
            // Показываем прелоадер
            setPreloaderStatus(true);

            const resPromise = getAllMovies();
            resPromise
                .then((movies) => {
                    // Прячем прелоадер
                    setPreloaderStatus(false);

                    localStorage.setItem('movies', JSON.stringify(movies));
                    const filteredMovies = complexMoviesFilter(movies, values.search, shortMoviesFilter);

                    if (filteredMovies.length === 0) {
                        setSearchProblemMessage('Ничего не найдено');
                    }

                    setMovies(filteredMovies);
                })
                .catch((error) => {
                  console.log('2222')
                    // Прячем прелоадер

                    setPreloaderStatus(false);
                    setSearchProblemMessage('Что то пошло не так!');
                })
        }
    }

    return (
        <section className='search-form'>
            <form className='search-form__group' onSubmit={handleSubmit}>
                <div className='search-form__container'>
                    <input
                        name="search"
                        onChange={handleChange}
                        className='search-form__input'
                        maxLength='30'
                        type="text"
                        placeholder="Фильм"
                        required
                        autoComplete='off'
                    />
                    <button className='search-form__button' type="submit"></button>
                </div>
                <FilterCheckbox
                    shortMoviesFilter={ shortMoviesFilter }
                    setShortMoviesFilter={ setShortMoviesFilter }
                />
            </form>
        </section>
    )
}

export default SearchForm;
