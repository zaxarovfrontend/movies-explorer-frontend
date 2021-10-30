import React from 'react';
import './moviesCard.css';
import {useLocation} from "react-router-dom";

function MoviesCard(props) {
    const { pathname } = useLocation();
    const { moviesId, updateLikedMoviesIds, likedMoviesIds } = props;

    const isMovieLiked = likedMoviesIds.indexOf(moviesId) !== -1;
    const likeClassName = `movies-card__like ${isMovieLiked ? 'movies-card__like_active' : ''}`;

    return (
        <section className='movies-card'>
            <div className='movies-card__container'>
                <img className='movies-img' src={props.url} alt={props.title}></img>
                <div className='movies-card__group'>
                    <h2 className='movies-card__title'>{props.title}</h2>
                    {pathname === "/movies" ? (
                        <button
                          className={ likeClassName }
                          onClick={ () => { updateLikedMoviesIds(moviesId) } }
                        />
                    ) : (
                        <button className='movies-card__delete'></button>
                    )}
                </div>
                <p className='movies-card__subtitle'>{props.duration}</p>
            </div>
        </section>
    )
}

export default MoviesCard;
