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
           <Footer/>
        </main>

    )
}

export default  Movies;
