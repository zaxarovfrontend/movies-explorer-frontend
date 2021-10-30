import React, { useState, useEffect } from 'react';
import MoviesCard from "../MoviesCard/moviesCard";
import './moviesCardList.css';

function MoviesCardList(props) {
    const { movies } = props;
    return (
        <div className='movies-cardList__card'>
            {
              movies.length ?  movies.map((movie) => {
                    return (
                        <MoviesCard
                            key={ movie.id }
                            moviesId={ movie.id }
                            url={ "https://api.nomoreparties.co" + movie.image.url}
                            title={ movie.nameRU }
                            duration={ movie.duration }
                            updateLikedMoviesIds={ props.updateLikedMoviesIds }
                            likedMoviesIds={props.likedMoviesIds}
                        />
                    )

              }) : null
            }
        </div>
    )
}

export default MoviesCardList;
