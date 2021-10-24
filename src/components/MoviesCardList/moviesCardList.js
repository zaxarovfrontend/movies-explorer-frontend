import React from 'react';
import MoviesCard from "../MoviesCard/moviesCard";
import './moviesCardList.css';

function MoviesCardList({ movies }) {
    return (
        <section className='movies-cardList'>
            <div className='movies-cardList__container'>
                <div className='movies-cardList__card'>
                    {
                        movies.map((movie) => {
                            return (
                                <MoviesCard
                                    key={ movie.id }
                                    url={ "https://api.nomoreparties.co" + movie.image.url}
                                    title={ movie.nameRU }
                                    duration={ movie.duration }
                                />
                            )
                        })
                    }
                </div>
                <button className='movies-cardList__button'>Ещё</button>
            </div>

        </section>
    )
}

export default MoviesCardList;
