import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormModal/LoginForm";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import ListingIndex from "./components/ListingIndex";
import HomePage from "./components/HomePage";
import ListingCreate from "./components/ListingCreate/ListingCreate";

function App() {
  return (
    <>
    <Navigation />    
      <Switch>
        {/* <Route path="/login">
          <LoginFormPage />
        </Route> */}
        <Route path="/sell">
          <ListingCreate/>
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route exact path="/shop"> 
          <ListingIndex />
        </Route>
        <Route exact path='/' >
          <HomePage />  
        </Route>
        <Redirect to='/' />
      </Switch>


    </>
  );
}

export default App;
