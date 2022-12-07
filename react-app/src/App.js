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
import Mammoth from './components/Pages/Mammoth';
import Bear from './components/Pages/Bear';
import Mthigh from './components/Pages/Mthigh';
import Beginner from './components/Pages/beginner';
import Intermediate from './components/Pages/intermediate';
import BlackDiamond from './components/Pages/blackdiamond';
import DoubleBlackDiamond from './components/Pages/doubleblackdiamond';
import PageNotFound from './components/PageNotFound';
import ProfilePage from './components/auth/ProfilePage';
import ProfileEdit from './components/auth/ProfileEdit';
import Oregon from './components/Pages/Oregon/Oregon';
import MountHood from './components/Pages/Oregon/MountHood';
import Timberline from './components/Pages/Oregon/Timberline';
import Bachelor from './components/Pages/Oregon/Bachelor';
import NewYork from './components/Pages/NewYork/NewYork';
import Gore from './components/Pages/NewYork/Gore';
import Hunter from './components/Pages/NewYork/Hunter';
import Windham from './components/Pages/NewYork/Windham';
import Washington from './components/Pages/Washington/Washington';
import Baker from './components/Pages/Washington/Baker';
import Crystal from './components/Pages/Washington/Crystal';
import Stevens from './components/Pages/Washington/Stevens';

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
        <Route exact path='/profile/:firstName/edit'>
          <ProfileEdit />
        </Route>
        <Route exact path='/profile/:firstName'>
          <ProfilePage />
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
        <Route exact path='/Mammoth Mountain'>
          <Mammoth />
        </Route>
        <Route exact path='/Bear Mountain'>
          <Bear />
        </Route>
        <Route exact path='/Mountain High'>
          <Mthigh />
        </Route>
        <Route exact path ='/Oregon'>
          <Oregon />
        </Route>
        <Route exact path='/Mount Hood Meadows'>
          <MountHood />
        </Route>
        <Route exact path='/Timberline Summit Pass'>
          <Timberline />
        </Route>
        <Route exact path='/Mount Bachelor'>
          <Bachelor />
        </Route>
        <Route exact path = '/New York'>
          <NewYork />
        </Route>
        <Route exact path = '/Gore Mountain'>
          <Gore />
        </Route>
        <Route exact path = '/Windham Mountain'>
          <Windham />
        </Route>
        <Route exact path = '/Hunter Mountain'>
          <Hunter />
        </Route>
        <Route exact path = '/Washington'>
          <Washington />
        </Route>
        <Route exact path = '/Crystal Mountain'>
          <Crystal />
        </Route>
        <Route exact path = '/Stevens Pass'>
          <Stevens />
        </Route>
        <Route exact path = '/Mount Baker'>
          <Baker />
        </Route>
        <Route exact path='/beginner'>
          <Beginner />
        </Route>
        <Route exact path='/intermediate'>
          <Intermediate />
        </Route>
        <Route exact path='/blackdiamond'>
          <BlackDiamond />
        </Route>
        <Route exact path='/doubleblackdiamond'>
          <DoubleBlackDiamond />
        </Route>
        <Route>
          <PageNotFound />
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
