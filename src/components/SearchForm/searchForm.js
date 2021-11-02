import React, { useState } from 'react';
import './searchForm.css';
import FilterCheckbox from '../FilterCheckbox/filterCheckbox';

import { useForm } from '../../Validation/UseForm';

import { getAllMovies } from '../../utils/MoviesApi';

import { complexMoviesFilter } from '../../utils/movies-filter';

function SearchForm(props) {
  const {
    setMovies,
    setPreloaderStatus,
    setSearchProblemMessage,
    searchFormType
  } = props;
  const {
    values,
    handleChange
  } = useForm();
  const [shortMoviesFilter, setShortMoviesFilter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmitMovies() {
    const moviesFromLocalStorageString = localStorage.getItem('movies');

    if (moviesFromLocalStorageString) {
      const parsedMovies = JSON.parse(moviesFromLocalStorageString);
      const filteredMovies = complexMoviesFilter(parsedMovies, values.search, shortMoviesFilter);

      if (filteredMovies.length === 0) {
        setSearchProblemMessage('Ничего не найдено');
      } else {
        setSearchProblemMessage('');
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
          // Прячем прелоадер
          setPreloaderStatus(false);
          setSearchProblemMessage('Во время запроса произошла ошибка. Возможно,' +
            ' проблема с соединением или сервер недоступен. ' +
            'Подождите немного и попробуйте ещё раз');
        });
    }
  }

  function handleSubmitLikedMovies() {
    setMovies(values, shortMoviesFilter);
  }

  function formSubmit(evt) {
    evt.preventDefault();

    if (!evt.target.elements.search.value) {
      evt.target.elements.search.setCustomValidity("Нужно ввести ключевое слово");
      setErrorMessage("Нужно ввести ключевое слово");
    } else {
      evt.target.elements.search.setCustomValidity("");
      setErrorMessage("");

      if (searchFormType === 'movies') {
        handleSubmitMovies();
      }

      if (searchFormType === 'likedMovies') {
        handleSubmitLikedMovies();
      }
    }
  }

  return (
    <section className="search-form">

      <form
        className="search-form__group"
        onSubmit={formSubmit}
      >
        <div className="search-form__container">
          <input
            name="search"
            onChange={(evt) => {
              setErrorMessage("");
              handleChange(evt);
              evt.target.setCustomValidity("");
            }}
            className="search-form__input"
            maxLength="30"
            type="text"
            placeholder="Фильм"
            // required={(searchFormType === 'movies') ? true : false}
            required={false}
            autoComplete="off"
          />

          <button className="search-form__button" type="submit"/>
        </div>
          <div className='search-form__error-subtitle'>
          {
            errorMessage && (
              <span className='search-form__error-text'>
                  { errorMessage }
                </span>
            )
          }
          </div>


        <FilterCheckbox
          shortMoviesFilter={shortMoviesFilter}
          setShortMoviesFilter={setShortMoviesFilter}
        />

      </form>
    </section>
  );
}

export default SearchForm;
