import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navbar/NavBar';
// import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import HomePage from './components/Trail/HomePage';
import TrailDetail from './components/Trail/TrailDetail';
import Trails from './components/Trail/Trail';
import CreateTrail from './components/Trail/CreateTrail';
import UpdateTrail from './components/Trail/UpdateTrail';
import Review from './components/Review/Review';
import Resort from './components/Pages/Resort';
import Allthetrails from './components/Pages/Allthetrails';
import USA from './components/Pages/USA';
import California from './components/Pages/CA';
import Boreal from './components/Pages/Boreal';
import Heavenly from './components/Pages/Heavenly';

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
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/signup">
          <SignUpForm />
        </Route>
        <Route exact path="/trails/new">
          <CreateTrail />
        </Route>
        <Route exact path="/trails/:id">
          <TrailDetail />
        </Route>
        <Route exact path="/trails">
          <Trails />
        </Route>
        <Route exact path="/trails/:id/update">
          <UpdateTrail />
        </Route>
        <Route exact path="/reviews">
          <Review />
        </Route>
        <Route exact path="/resorts">
          <Resort />
        </Route>
        <Route exact path="/alltrails">
          <Allthetrails />
        </Route>
        <Route exact path="/United States of America">
          <USA />
        </Route>
        <Route exact path='/California'>
          <California />
        </Route>
        <Route exact path='/Boreal Mountain Resort'>
          <Boreal />
        </Route>
        <Route exact path='/Heavenly Lake Tahoe'>
          <Heavenly />
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute> */}
        {/* <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
