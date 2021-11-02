import React from 'react';
import './moviesCard.css';
import {useLocation} from "react-router-dom";
import { CurrentUserContext } from '../Context/CurrentUserContext';

function MoviesCard(props) {
    const { pathname } = useLocation();
    const { moviesId, updateLikedMoviesIds, likedMoviesIds, movie } = props;

    const isMovieLiked = likedMoviesIds.indexOf(moviesId) !== -1;
    const likeClassName = `movies-card__like ${isMovieLiked ? 'movies-card__like_active' : ''}`;

    return (
        <section className='movies-card'>
            <div className='movies-card__container'>
                <a href={movie.trailerLink} target="_blank">
                    <img className='movies-img' src={props.url} alt={props.title}></img>
                </a>
                <div className='movies-card__group'>
                    <h2 className='movies-card__title'>{props.title}</h2>
                    {pathname === "/movies" ? (
                        <button
                          className={ likeClassName }
                          onClick={ () => { updateLikedMoviesIds(moviesId, movie) } }
                        />
                    ) : (
                        <button
                          className='movies-card__delete'
                          onClick={ () => { updateLikedMoviesIds(moviesId, movie) } }
                        />
                    )}
                </div>
                <p className='movies-card__subtitle'>{props.duration}</p>
            </div>
        </section>
    )
}

export default MoviesCard;
