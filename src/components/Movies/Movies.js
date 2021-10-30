import React, { useState, useEffect, useCallback } from 'react';
import SearchForm from "../SearchForm/searchForm";
import MoviesCardList from "../MoviesCardList/moviesCardList";
import Footer from "../Footer/footer";
import Preloader from '../Preloader/preloader';
import { getParamsByScreenWidth } from '../../utils/getParamsByScreenWidth';

function Movies() {
    const [isPreloaderActive, setPreloaderStatus] = useState(false);
    const [searchProblemMessage, setSearchProblemMessage] = useState('');
    const [moviesStartParams, setMoviesStartParams] = useState(getParamsByScreenWidth());
    const [allMovies, setMovies] = useState([]);

    const memoizedCallback = useCallback(
      () => {
        function setNewCardsByResize() {
          setMoviesStartParams(getParamsByScreenWidth())
        }

        window.addEventListener("resize", setNewCardsByResize);

        return () => {
          window.removeEventListener("resize", setNewCardsByResize);
        }
      },
      [],
    );

    useEffect(memoizedCallback);

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
              movies={ allMovies }
              searchProblemMessage={ searchProblemMessage }
              moviesStartParams={ moviesStartParams }
            />

            {/*<button className='movies-cardList__button'>*/}
            {/*    Ещё*/}
            {/*</button>*/}

           <Footer/>
        </main>

    )
}

export default  Movies;
