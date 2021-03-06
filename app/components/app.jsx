import { Route, Link, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import MovieContainer from './containers/MovieContainer';
import LoginContainer from './containers/LoginContainer';
import CreateUser from './CreateUser/CreateUser';
import NavBarContainer from './containers/NavBarContainer';
import FavoritesContainer from './containers/FavoritesContainer';
import { PageNotFound } from './PageNotFound/PageNotFound';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavBarContainer />
        <h1>Movie Watcher</h1>
        <Switch>
          <Route exact path="/" render={ ({ history }) => (
            <MovieContainer />
          )} />
          <Route exact path='/login' render={ ({ history }) => (
            <LoginContainer history={history}/>
          )} />
          <Route exact path='/signup' render={ ({ history }) => (
            <CreateUser history={history} />
          )} />
          <Route exact path='/favorites' render={ ({ history }) => (
            <FavoritesContainer history={ history } />
          )} />
            <Route path='/*' component={ PageNotFound } />
        </Switch>
      </div>
    );
  }
}
