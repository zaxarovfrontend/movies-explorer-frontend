import React from 'react';
import Promo from "../Promo/promo";
import AboutProject from "../AboutProject/aboutProject";
import Techs from "../Techs/techs";
import AboutMe from "../AboutMe/aboutMe";
import Portfolio from "../Portfolio/portfolio";
import Footer from "../Footer/footer";


function Main () {

    return (
        <main className='main'>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </main>
    )
}

export default Main;
