import React from 'react';
import Promo from "../Promo/promo";
import AboutProject from "../AboutProject/aboutProject";
import Techs from "../Techs/techs";
import AboutMe from "../AboutMe/aboutMe";

function Main () {


    return (
        <main className='main'>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            {/*<Portfolio />*/}
            {/*<footer />*/}
        </main>

    )
}

export default Main;
