import React from 'react';
import SearchForm from "../SearchForm/searchForm";
import Preloader from "../Preloader/preloader";
import MoviesCardList from "../MoviesCardList/moviesCardList";


function Movies() {
    return(
        <main className='main'>
        <SearchForm/>
            {/*<Preloader/>*/}
      <MoviesCardList/>
        </main>

    )
}

export default  Movies;
