import React from 'react';
import '../AboutProject/aboutProject.css';

function AboutProject() {
    return(
        <section className='aboutProject'>
            <div className='aboutProject__container'>
                <h2 className='aboutProject__header-title'>О проекте</h2>
                <div className='aboutProject__block'>
                    <div className='aboutProject__box'>
                        <h3 className='aboutProject__title'>Дипломный проект включал 5 этапов</h3>
                        <p className='aboutProject__subtitle'>Составление плана, работу над бэкендом, вёрстку,
                            добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className='aboutProject__box'>
                        <h3 className='aboutProject__title'>На выполнение диплома ушло 5 недель</h3>
                        <p className='aboutProject__subtitle'>У каждого этапа был мягкий и жёсткий дедлайн,
                            которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className='aboutProject__info'>
                    <p className='aboutProject__week'>1 неделя</p>
                    <p className='aboutProject__week'>4 недели</p>
                    <p className='aboutProject__text'>Back-end</p>
                    <p className='aboutProject__text'>Front-end</p>
                </div>
            </div>
        </section>
    )
}


export default AboutProject;
