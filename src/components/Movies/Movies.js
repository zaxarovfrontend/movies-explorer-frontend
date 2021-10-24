import React, { useState } from 'react';
import SearchForm from "../SearchForm/searchForm";
import MoviesCardList from "../MoviesCardList/moviesCardList";
import Footer from "../Footer/footer";
/*<Preloader/>*/

function Movies() {
    const [movies, setMovies] = useState([]);

    return(
        <main className='main'>
             <SearchForm setMovies={ setMovies }/>
            {/*<Preloader/>*/}
            <MoviesCardList movies={ movies }/>

            {/*<button className='movies-cardList__button'>*/}
            {/*    Ещё*/}
            {/*</button>*/}

           <Footer/>
        </main>

    )
}

export default  Movies;
