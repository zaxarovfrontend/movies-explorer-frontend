import React, { useState, useEffect } from 'react';
import Footer from '../Footer/footer';
import SearchForm from '../SearchForm/searchForm';
import MoviesCardList from '../MoviesCardList/moviesCardList';
import { complexMoviesFilter } from '../../utils/movies-filter';

function SavedMovies(props) {
  const {
    likedMoviesIds,
    updateLikedMoviesIds,
    searchProblemMessage,
    setSearchProblemMessage
  } = props;

  function getOnlyLikedMovies() {
    const moviesFromLocalStorageString = JSON.parse(localStorage.getItem('movies') || '[]');

    return moviesFromLocalStorageString.filter((movie) => {
      return likedMoviesIds.indexOf(movie.id) !== -1;
    });
  }

  const [onlyLikedMovies] = useState(getOnlyLikedMovies());

  const [filteredLikedMovies, setfFilteredLikedMovies] = useState(onlyLikedMovies);

  useEffect(() => {
    const onlyLikedMovies = getOnlyLikedMovies();
    setfFilteredLikedMovies(onlyLikedMovies);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likedMoviesIds]);

  const setMovies = (values, shortMoviesFilter) => {
    const filteredMoviesTemp = complexMoviesFilter(onlyLikedMovies, values.search, shortMoviesFilter);

    if (filteredMoviesTemp.length === 0) {
      setSearchProblemMessage('Ничего не найдено');
    } else {
      setSearchProblemMessage('');
    }

    setfFilteredLikedMovies(filteredMoviesTemp);
  };

  return (
    <main className="main">
      <SearchForm
        setMovies={setMovies}
        setSearchProblemMessage={() => {
        }}
        searchFormType="likedMovies"
      />
      <section className="movies-cardList">
        <div className="movies-cardList__container">
          <MoviesCardList
            movies={filteredLikedMovies}
            updateLikedMoviesIds={updateLikedMoviesIds}
            likedMoviesIds={likedMoviesIds}
            searchProblemMessage={searchProblemMessage}
          />
        </div>
      </section>
      <Footer/>
    </main>
  );
}

export default SavedMovies;
