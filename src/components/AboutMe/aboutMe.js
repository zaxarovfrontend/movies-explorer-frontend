import React from 'react';
import './aboutMe.css';
import image from '../../images/pic__COLOR_pic.jpg';

function AboutMe() {
    return(
<section className='aboutMe'>
    <div className='aboutProject__container'>
        <h2 className='aboutProject__header-title aboutMe__header-title'>Студент</h2>
        <div className='aboutProject__block aboutMe__blocks'>
            <div className='aboutProject__box aboutMe__box'>
                <img className='aboutMe__img' src={image} alt='фото студента'></img>
            </div>
            <div className='aboutProject__box'>
                <h3 className='aboutProject__title aboutMe__title'>Владимир</h3>
                <p className='aboutProject__subtitle aboutMe__subtitle aboutMe__subtitle-fontsize'>Фронтенд-разработчик, 36 лет</p>
                <p className='aboutProject__subtitle aboutMe__subtitle'>Я родился и живу в Москва, закончил МФЮА. У меня есть жена, дочь и сын. Я люблю слушать музыку.Любимая группа the prodigy. Ещё увлекаюсь спортом.
                    Недавно начал кодить.
                    С 2013 года работал в компании «ФастФинанс».
                    После того, как прошёл курс по веб-разработке,
                    начал искать работу в данном направлении.</p>
            </div>
        </div>
        <div className='aboutMe__links'>
            <a href="https://github.com/zaxarovfrontend" target="_blank" rel="noreferrer" className="aboutMe__link">Github</a>
            <a href="https://www.facebook.com/profile.php?id=100001487061944" target="_blank" rel="noreferrer" className="aboutMe__link">Facebook</a>
        </div>
    </div>

</section>

    )
}















export default AboutMe;
