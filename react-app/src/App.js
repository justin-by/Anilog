import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import LoginForm from './components/auth/LoginForm';
// import SignUpForm from './components/auth/SignUpForm';
// import UsersList from './components/UsersList';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Background from './components/Background/Background';
import ListPage from './components/ListPage/ListPage';
import BrowsePage from './components/BrowsePage/BrowsePage'
import AnimePage from './components/AnimePage/AnimePage'
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact={true} >
          <Background />
        </Route>
        <Route path='/search/anime' exact={true} >
          <BrowsePage />
        </Route>
        <Route path='/anime/:animeId' exact={true} >
          <AnimePage />
        </Route>
        <ProtectedRoute path='/user/:username/list' exact={true} >
          <ListPage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
