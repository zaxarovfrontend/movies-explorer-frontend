import React from 'react';
import MoviesCard from "../MoviesCard/moviesCard";
import './moviesCardList.css';
import { useForm } from '../../Validation/UseForm';

function MoviesCardList({ movies, searchProblemMessage }) {
    return (
        <section className='movies-cardList'>
            <div className='movies-cardList__container'>
                <div className='movies-cardList__card'>
                    {
                      movies.length ? movies.map((movie) => {
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
