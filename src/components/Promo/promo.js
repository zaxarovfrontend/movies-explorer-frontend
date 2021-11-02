import React from 'react';
import logoHeader from '../../images/text__COLOR_landing-logo.svg'
import NavTab from '../NavTab/navTab';

function Promo () {
    return (
        <section className='promo'>
            <div className='promo__group'>
            <div className='promo__container'>
            <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
                <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <NavTab/>
            </div>
                <img className='promo__logo' alt='логотип'src={logoHeader}></img>
            </div>
        </section>
    )
}


export default Promo;
