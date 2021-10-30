import React from 'react';
import Footer from "../Footer/footer";
import SearchForm from "../SearchForm/searchForm";
import MoviesCardList from "../MoviesCardList/moviesCardList";

function SavedMovies(props) {
    const { likedMoviesIds, updateLikedMoviesIds } = props;
    const moviesFromLocalStorageString = JSON.parse(localStorage.getItem('movies') || '[]');

    const onlyLikedMovies = moviesFromLocalStorageString.filter((movie) => { // [{id: 5}]
      return likedMoviesIds.indexOf(movie.id) !== -1;  // [5, 14].indexOf(5) = 0
    })

   console.log('onlyLikedMovies', onlyLikedMovies)

    return (
        <main className='main'>
            <SearchForm />
            <MoviesCardList
              movies={ onlyLikedMovies }
              updateLikedMoviesIds={ updateLikedMoviesIds }
              likedMoviesIds={ likedMoviesIds }
            />
            <Footer/>
        </main>
    )
}

export default SavedMovies;
