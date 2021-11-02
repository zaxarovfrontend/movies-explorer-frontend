import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import api from '../../utils/api';
import '../../index.css';
import ProtectedRoute from "../ProtectedRoute/protectedRoute";
import ProtectedRouteLoggedIn from "../ProtectedRouteLoggedIn/ProtectedRouteLoggedIn";
import Main from "../Main/main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/savedMovies";
import Profile from "../Profile/profile";
import Login from "../Login/Login";
import Register from "../Register/register";
import NotFound from "../NotFound/notFound";
import Header from "../Header/header";
import UserAlert from "../UserAlert/userAlert"
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

  const [profileUpdateMessage, setProfileUpdateMessage] = useState('');

  const [alertMessage, setAlertMessage] = useState('');

  const setAlertMessageWraper = (message) => {
    setAlertMessage(message);

    setTimeout(() => {
      setAlertMessage("");
    }, 3000)
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (loggedIn) {
      api.getAllLikedMovie(token)
        .then((data) => {
          setLikedMoviesByServer(data);
        })
        .catch((err) => {
          console.log('res err', err)
        })
    } else {
      setLikedMoviesByServer([]);
    }

    setAlertMessage('');

  }, [loggedIn])

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
          setAlertMessageWraper("Что-то пошло не так... попробуйте еще раз...")
        })
    } else {
      const tempObj = likedMoviesByServer.find((item) => {
        return item.movieId === id;
      })

      api.deleteLikedMovie(tempObj._id, token)
        .then((data) => {

          const tempArr = likedMoviesByServer.filter((item) => {
            return item._id !== tempObj._id;
          })

          setLikedMoviesByServer(tempArr)
        })
        .catch((err) => {
          setAlertMessageWraper("Что-то пошло не так... попробуйте еще раз...")
          // console.log('deleteLikedMovie res err', err)
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
    return api.editUserData(data, localStorage.token)
      .then((data) => {
        setCurrentUser(data);

        setProfileUpdateMessage("Данные успешно обновлены")

        return Promise.resolve();
      })
      .catch((error) => {
        setAlertMessageWraper("Что-то пошло не так... попробуйте еще раз...")
        if (error) {
          error.then((errorJson) => {
            setFormError({
              registerError: true,
              errorMessage: errorJson.message
            });
          })
        }
        return Promise.reject();
      })
  }

  function register(name, email, password) {
    auth.register(name, email, password).then(
      (res) => {
        clearFormError();
        login(res.email, password)
      })
      .catch((error) => {
        setAlertMessageWraper("Что-то пошло не так... попробуйте еще раз...")
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
        setAlertMessageWraper("Что-то пошло не так... попробуйте еще раз...")
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
    history.push('signin');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <UserAlert message={ alertMessage }/>
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
              profileUpdateMessage={profileUpdateMessage}
              setProfileUpdateMessage={ setProfileUpdateMessage }
              // currentUser={ currentUser }
            />
          </ProtectedRoute>
          <ProtectedRouteLoggedIn path='/signin' loggedIn={loggedIn}>
            <Login onLogin={login}
                   formError={ formError }
                   clearFormError={clearFormError}
            />
          </ProtectedRouteLoggedIn>
          <ProtectedRouteLoggedIn path='/signup' loggedIn={loggedIn}>
            <Register
              onRegister={register}
              formError={ formError }
              clearFormError={clearFormError}
            />
          </ProtectedRouteLoggedIn>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
