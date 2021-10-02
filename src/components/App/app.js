import React from 'react';
import { Route, Switch } from "react-router-dom";

import '../../index.css';
import Main from "../Main/main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/savedMovies";
import Profile from "../Profile/profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Header from "../Header/header";

function App() {
    return (
        <div className="page">
           <Header />
        <Switch>
            <Route exact path ='/'>
                <Main />
            </Route>
            <Route  path ='/movies'>
                <Movies />
            </Route>
            <Route path ='/saved-movies'>
                <SavedMovies/>
            </Route>
            <Route path ='/profile'>
                <Profile/>
            </Route>
            <Route path ='/signin'>
                <Login/>
            </Route>
            <Route path ='/signup'>
                <Register/>
            </Route>
            <Route path ='*'>
                <NotFound/>
            </Route>
        </Switch>
        </div>
    );
}

export default App;
