import React, { useState, useEffect } from 'react';
import MoviesCard from "../MoviesCard/moviesCard";
import './moviesCardList.css';

function MoviesCardList({ movies, searchProblemMessage, moviesStartParams }) { // [] 12
    const [partOfMovies, setPartOfMovies] = useState([]);

    useEffect(() => {
        const slicedMovies = movies.slice(0, moviesStartParams.moviesStartCount);

        if (slicedMovies.length !== partOfMovies.length) {
            setPartOfMovies(slicedMovies);
        }
    }, [movies])

    const addMovies = () => {
      const slicedMovies = movies.slice(0, partOfMovies.length + moviesStartParams.addMoviesCount);
      setPartOfMovies(slicedMovies);
    }

    return (
        <section className='movies-cardList'>
            <div className='movies-cardList__container'>
                <div className='movies-cardList__card'>
                    {
                      partOfMovies.length ?  partOfMovies.map((movie) => {
                            return (
                                <MoviesCard
                                    key={ movie.id }
                                    url={ "https://api.nomoreparties.co" + movie.image.url}
                                    title={ movie.nameRU }
                                    duration={ movie.duration }
                                />
                            )

                      }) : (searchProblemMessage ? (<span className='movies-cardList__error'>{ searchProblemMessage }</span>) : null)
                    }
                </div>
               {
                 partOfMovies.length ? (
                   <button
                     className='movies-cardList__button'
                     onClick={ addMovies }
                   >
                     Ещё
                   </button>
                 ) : null
               }
            </div>
        </section>
    )
}

export default MoviesCardList;
