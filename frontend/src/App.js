import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormModal/LoginForm";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import ListingIndex from "./components/ListingIndex";
import HomePage from "./components/HomePage";
import ListingCreate from "./components/ListingCreate/ListingCreate";
import ListingShow from "./components/ListingShow/index"
import FilterBar from "./components/FilterBar";
import FilteredIndex from "./components/FilteredIndex";

function App() {
  return (
    <>
    {/* <div class='header'> */}
      <Navigation />   
    {/* </div> */}
   

    <div class='body'>
      <FilterBar/>
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
        <Route exact path="/listings/:listingId">
          <ListingShow />
        </Route>
        <Route exact path="/categories/:category">
          <FilteredIndex />
        </Route>
        <Redirect to='/' />
      </Switch>
    </div>


    <div class='footer'>


    </div>
    </>
  );
}

export default App;
