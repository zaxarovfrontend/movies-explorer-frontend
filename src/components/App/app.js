import React from 'react';
import { Route, Switch } from "react-router-dom";

import '../../index.css';
import Main from "../Main/main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/savedMovies";
import Profile from "../Profile/profile";
import Login from "../Login/Login";
import Register from "../Register/register";
import NotFound from "../NotFound/notFound";
import Header from "../Header/header";
import MenuNavigation from "../MenuNavigation/menuNavigation";

function App() {
    const [loggedIn, setLoggedIn] = React.useState(true);

    return (
        <div className="page">
        <Switch>
            <Route exact path ='/'>
                <Header  loggedIn={loggedIn}/>
                <Main />
            </Route>
            <Route  path ='/movies'>
                <Header  loggedIn={loggedIn}/>
                <Movies />
            </Route>
            <Route path ='/saved-movies'>
                <Header  loggedIn={loggedIn}/>
                <SavedMovies/>
            </Route>
            <Route path ='/profile'>
                <Header  loggedIn={loggedIn}/>
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
