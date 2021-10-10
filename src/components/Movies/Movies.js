import React from 'react';
import SearchForm from "../SearchForm/searchForm";
import Preloader from "../Preloader/preloader";
import MoviesCardList from "../MoviesCardList/moviesCardList";
import Footer from "../Footer/footer";


function Movies() {
    return(
        <main className='main'>
        <SearchForm/>
            {/*<Preloader/>*/}
      <MoviesCardList/>
            <div className='movies-cardList__container'>
            <button className='movies-cardList__button'>Ещё</button>
            </div>
           <Footer/>
        </main>

    )
}

export default  Movies;
