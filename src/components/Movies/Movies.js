import React, { useState } from 'react';
import SearchForm from "../SearchForm/searchForm";
import MoviesCardList from "../MoviesCardList/moviesCardList";
import Footer from "../Footer/footer";
import Preloader from '../Preloader/preloader';
/*<Preloader/>*/

function Movies() {
    const [movies, setMovies] = useState([]);
    const [isPreloaderActive, setPreloaderStatus] = useState(false);
    const [searchProblemMessage, setSearchProblemMessage] = useState('');

    return(
        <main className='main'>
             <SearchForm
               setMovies={ setMovies }
               setPreloaderStatus={ setPreloaderStatus }
               setSearchProblemMessage={ setSearchProblemMessage }
             />
            {
              isPreloaderActive && (
                <Preloader />
              )
            }
            <MoviesCardList
              movies={ movies }
              searchProblemMessage={ searchProblemMessage }
            />

            {/*<button className='movies-cardList__button'>*/}
            {/*    Ещё*/}
            {/*</button>*/}

           <Footer/>
        </main>

    )
}

export default  Movies;
