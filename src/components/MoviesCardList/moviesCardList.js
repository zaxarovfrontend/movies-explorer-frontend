import React from 'react';
import MoviesCard from "../MoviesCard/moviesCard";
import './moviesCardList.css';


import image1 from '../../images/movie1.jpg';
import image2 from '../../images/Movie2.jpg';
import image3 from '../../images/Movie3.jpg';
import image4 from '../../images/Movie4.jpg';
import image5 from '../../images/Movie5.jpg';
import image6 from '../../images/Movie6.jpg';
import image7 from '../../images/Movie7.jpg';
import image8 from '../../images/Movie8.jpg';
import image9 from '../../images/Movie9.jpg';
import image10 from '../../images/Movie10.jpg';
import image11 from '../../images/Movie11.jpg';
import image12 from '../../images/Movie12.jpg';


function MoviesCardList(props) {
    return (
        <section className='movies-cardList'>
            <div className='movies-cardList__container'>
                <div className='movies-cardList__card'>
                    <MoviesCard url={image1} title='33 слова о дизайне' subtitle='1ч 47м'/>
                    <MoviesCard url={image2} title='Киноальманах «100 лет дизайна»' subtitle='1ч 47м'/>
                    <MoviesCard url={image3} title='В погоне за Бенкси' subtitle='1ч 47м'/>
                    <MoviesCard url={image4} title='Баския: Взрыв реальности' subtitle='1ч 47м'/>
                    <MoviesCard url={image5} title='Бег это свобода' subtitle='1ч 47м'/>
                    <MoviesCard url={image6} title='Книготорговцы' subtitle='1ч 47м'/>
                    <MoviesCard url={image7} title='Когда я думаю о Германии ночью' subtitle='1ч 47м'/>
                    <MoviesCard url={image8} title='Gimme Danger: История Игги и The Stooge...' subtitle='1ч 47м'/>
                    <MoviesCard url={image9} title='Дженис: Маленькая девочка грустит' subtitle='1ч 47м'/>
                    <MoviesCard url={image10} title='Соберись перед прыжком' subtitle='1ч 47м'/>
                    <MoviesCard url={image11} title='Пи Джей Харви: A dog called money' subtitle='1ч 47м'/>
                    <MoviesCard url={image12} title='По волнам: Искусство звука в кино' subtitle='1ч 47м'/>
                </div>
                <button className='movies-cardList__button'>Ещё</button>
            </div>

        </section>
    )
}

export default MoviesCardList;
