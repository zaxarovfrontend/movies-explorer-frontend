import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import api from '../../utils/api';
import '../../index.css';
import ProtectedRoute from "../ProtectedRoute/protectedRoute";
import Main from "../Main/main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/savedMovies";
import Profile from "../Profile/profile";
import Login from "../Login/Login";
import Register from "../Register/register";
import NotFound from "../NotFound/notFound";
import Header from "../Header/header";
// import Preloader from '../Preloader/preloader'

import * as auth from "../../utils/auth";

import {CurrentUserContext} from '../Context/CurrentUserContext';

function App(props) {
    const [currentUser, setCurrentUser] = useState({});
    //Авторизация
    const [loggedIn, setLoggedIn] = useState(true);
    const [userEmail, setUserEmail] = useState('');

    const [formError, setFormError] = useState({ registerError: false, errorMessage: "" });

    const [likedMoviesIds, setLikedMoviesIds] = useState([]);

    const [searchProblemMessage, setSearchProblemMessage] = useState('');

    const [likedMoviesByServer, setLikedMoviesByServer] = useState([]);



  useEffect(() => {
    const token = localStorage.getItem('token');
    api.getAllLikedMovie(token)
      .then((data) => {
        setLikedMoviesByServer(data);
      })
      .catch((err) => {
        console.log('res err', err)
      })
  }, [])

    useEffect(() => {
      const tempArr = likedMoviesByServer.map((item) => {
        return item.movieId;
      })
      setLikedMoviesIds(tempArr);
    }, [likedMoviesByServer])

    const updateLikedMoviesIds = (id, movie) => { // id = 1
        const token = localStorage.getItem('token');

        const isNeedSaveLike = !likedMoviesByServer.find((item) => {
          return item.movieId === id;
        })

        if (isNeedSaveLike) {
            api.saveLikedMovie(movie, token)
              .then((data) => {
                  let tempArr = [...likedMoviesByServer];
                  tempArr.push(data);
                  setLikedMoviesByServer(tempArr)
              })
              .catch((err) => {
                  console.log('res err', err)
              })
        } else {
            const tempObj = likedMoviesByServer.find((item) => {
                return item.movieId === id;
            })

            api.deleteLikedMovie(tempObj._id, token)
              .then((data) => {
                  console.log('deleteLiked Movieres data', data)

                  const tempArr = likedMoviesByServer.filter((item) => {
                    return item._id !== tempObj._id;
                  })

                  setLikedMoviesByServer(tempArr)
              })
              .catch((err) => {
                  console.log('deleteLikedMovie res err', err)
              })
        }
    }

    function clearFormError() {
        setFormError({
            registerError: false,
            errorMessage: ""
        })
    }

    // const [isSuccess, setIsSuccess] = React.useState(false);
    const history = useHistory();

    React.useEffect(() => {
        const token = localStorage.getItem('token');
        auth.checkToken(token).then(
            (data) => {
                data.json().then((body) => {
                    setLoggedIn(true);
                    setUserEmail(body.email);
                    // history.push('/movies');
                })
            })
            .catch((err) => {
                    setLoggedIn(false);
                    console.log(err);
                }
            );
    }, [history]);

    // React.useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         checkToken();
    //     }
    // }, [checkToken]);


    //запрос данных пользователя
    React.useEffect(() => {
        const token = localStorage.getItem('token');
        api.getUserInfo(token)
            .then((data) => {
                setCurrentUser(data)
            })
            .catch((err) => console.log(err))

    }, [loggedIn])

    function handleUpdateUser(data) {
        api.editUserData(data, localStorage.token)
            .then((data) => {
                setCurrentUser(data);
            })
          .catch((error) => {
              console.log(error)
              error.then((errorJson) => {
                  setFormError({
                      registerError: true,
                      errorMessage: errorJson.message
                  });
              })
          })
    }

    function register(name, email, password) {
        auth.register(name, email, password).then(
            (res) => {
                history.push('/signin');
                clearFormError();
            })
            .catch((error) => {
                error.then((errorJson) => {
                    setFormError({
                        registerError: true,
                        errorMessage: errorJson.message
                    });
                })
            })
    }

    function login(email, password) {
        auth.authorization(email, password).then(
            (data) => {
                localStorage.setItem('token', data.token);
                console.log(localStorage.getItem('token'))
                setLoggedIn(true)
                history.push("/movies");
            })
          .catch((error) => {
              error.then((errorJson) => {
                  setFormError({
                      registerError: true,
                      errorMessage: errorJson.message
                  });
              })
          })
    }


    function signOut() {
        localStorage.removeItem("token");
        setLoggedIn(false);
        // history.push('signin');
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Switch>
                    <Route exact path='/'>
                        <Header  loggedIn={loggedIn} userEmail={userEmail} onSignOut={signOut}/>
                        <Main />
                    </Route>
                    <ProtectedRoute path='/movies' loggedIn={ loggedIn }>
                        <Header  loggedIn={loggedIn}/>
                        <Movies
                          updateLikedMoviesIds={updateLikedMoviesIds}
                          likedMoviesIds={ likedMoviesIds }
                          searchProblemMessage={ searchProblemMessage }
                          setSearchProblemMessage={ setSearchProblemMessage }
                        />
                    </ProtectedRoute>
                    <ProtectedRoute loggedIn={ loggedIn } path='/saved-movies'>
                            <Header loggedIn={loggedIn} />
                            <SavedMovies
                              likedMoviesIds={ likedMoviesIds }
                              updateLikedMoviesIds={updateLikedMoviesIds}
                              searchProblemMessage={ searchProblemMessage }
                              setSearchProblemMessage={ setSearchProblemMessage }
                            />
                    </ProtectedRoute>
                    <ProtectedRoute path='/profile' loggedIn={loggedIn}>
                        <Header  loggedIn={loggedIn}/>
                        <Profile
                          handleUpdateUser={handleUpdateUser}
                          formError={ formError }
                          signOut={ signOut }
                          clearFormError={clearFormError}
                          // currentUser={ currentUser }
                        />
                    </ProtectedRoute>
                    <Route path='/signin'>
                        <Login onLogin={login}
                               formError={ formError }
                               clearFormError={clearFormError}
                        />
                    </Route>
                    <Route path='/signup'>
                        <Register
                            onRegister={register}
                            formError={ formError }
                            clearFormError={clearFormError}
                        />
                    </Route>
                    <Route path='*'>
                        <NotFound/>
                    </Route>
                </Switch>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
