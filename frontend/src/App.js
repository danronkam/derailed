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
import CheckOut from "./components/CheckOut";
import UserEdit from "./components/UserEdit";
import UserShow from "./components/UserShow";
import Footer from "./components/Footer";
import ListingEdit from "./components/ListingEdit";
import DesignerIndex from "./components/DesignerIndex";
import CategoryIndex from "./components/CategoryIndex";


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
        <Route exact path="/sell">
          <ListingCreate/>
        </Route>
        <Route exact path="/signup">
          <SignupFormPage />
        </Route>
        <Route exact path="/shop"> 
          <ListingIndex />
        </Route>
        {/* <Route exact path="/shop/:category">
          <FilteredIndex />
        </Route> */}
        <Route exact path="/shop/:designerBrand">
          <DesignerIndex /> 
        </Route>
        <Route exact path="/shop/menswear/:category">
          <CategoryIndex /> 
        </Route>
        <Route exact path="/listings/:listingId">
          <ListingShow />
        </Route>
        <Route exact path="/listings/:listingId/edit">
          <ListingEdit />
        </Route>

        <Route exact path='/checkout/:listingId'>
          <CheckOut />
        </Route>
        <Route exact path="/users/:userId">
          <UserShow />
        </Route>
        <Route exact path="/users/:userId/edit">
          <UserEdit />
        </Route>
        <Route exact path='/' >
          <HomePage />  
        </Route>
        <Redirect to='/' />
      </Switch>
    </div>


    <div class='footer-container'>
        <Footer />

    </div>
    </>
  );
}

export default App;
