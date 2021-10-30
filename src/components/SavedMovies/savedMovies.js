import React from 'react';
import Footer from "../Footer/footer";
import SearchForm from "../SearchForm/searchForm";
import MoviesCardList from "../MoviesCardList/moviesCardList";

function SavedMovies() {
    return (
        <main className='main'>
            <SearchForm/>
            <MoviesCardList
              movies={ [] }
            />
            <Footer/>
        </main>
    )
}

export default SavedMovies;
