import React from 'react';
import MoviesCard from "../MoviesCard/moviesCard";
import image1 from '../../images/movie1.jpg';
import image2 from '../../images/Movie2.jpg';
import image3 from '../../images/Movie3.jpg';



function MoviesCardList (props) {
    return(
        <section className='movies-cardList'>
        <div className='movies-cardList__card'>
            <MoviesCard url={image1} title='33 слова о дизайне' subtitle='1ч 47м'/>
            <MoviesCard url={image2} title='Киноальманах «100 лет дизайна»' subtitle='1ч 47м'/>
            <MoviesCard url={image3} title='Пи Джей Харви: A dog called money' subtitle='1ч 47м'/>
            <MoviesCard url={image1} title='33 слова о дизайне' subtitle='1ч 47м'/>
            <MoviesCard url={image2} title='Киноальманах «100 лет дизайна»' subtitle='1ч 47м'/>
            <MoviesCard url={image3} title='Пи Джей Харви: A dog called money' subtitle='1ч 47м'/>
            <MoviesCard url={image1} title='33 слова о дизайне' subtitle='1ч 47м'/>
            <MoviesCard url={image2} title='Киноальманах «100 лет дизайна»' subtitle='1ч 47м'/>
            <MoviesCard url={image3} title='Пи Джей Харви: A dog called money' subtitle='1ч 47м'/>
            <MoviesCard url={image1} title='33 слова о дизайне' subtitle='1ч 47м'/>
            <MoviesCard url={image2} title='Киноальманах «100 лет дизайна»' subtitle='1ч 47м'/>
            <MoviesCard url={image3} title='Пи Джей Харви: A dog called money' subtitle='1ч 47м'/>
        </div>
        </section>
    )
}

export default MoviesCardList;
