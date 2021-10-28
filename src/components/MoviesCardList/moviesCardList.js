import React, { useState, useEffect, useCallback } from 'react';
import MoviesCard from "../MoviesCard/moviesCard";
import './moviesCardList.css';
import { useForm } from '../../Validation/UseForm';

// window.x = [];

function MoviesCardList({ movies, searchProblemMessage, moviesStartCount }) { // [] 12
   const [partOfMovies, setPartOfMovies] = useState([]);

    const memoizedCallback = useCallback(() => {
        const slicedMovies = movies.slice(0, moviesStartCount - 1);
      console.log('slicedMovies.length', slicedMovies.length)
      console.log('partOfMovies.length', partOfMovies.length)
        if (slicedMovies.length !== partOfMovies.length) {
             // window.x.push(movies)
          console.log('slicedMovies', slicedMovies)
            setPartOfMovies(slicedMovies);
        }
    }, [movies])

    useEffect(memoizedCallback);

    // console.log('partOfMovies', partOfMovies)

    return (
        <section className='movies-cardList'>
            <div className='movies-cardList__container'>
                <div className='movies-cardList__card'>
                    {
                      partOfMovies.length ? movies.map((movie) => {
                            return (
                                <MoviesCard
                                    key={ movie.id }
                                    url={ "https://api.nomoreparties.co" + movie.image.url}
                                    title={ movie.nameRU }
                                    duration={ movie.duration }
                                />
                            )
                      }) : (searchProblemMessage ? (<span>{ searchProblemMessage }</span>) : null)
                    }
                </div>
                <button className='movies-cardList__button'>Ещё</button>
            </div>

        </section>
    )
}

export default MoviesCardList;
