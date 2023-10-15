import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import ListingIndex from "./components/ListingIndex";
import HomePage from "./components/HomePage";
import ListingCreate from "./components/ListingCreate";
import ListingShow from "./components/ListingShow/index"
import FilterBar from "./components/FilterBar";
import CheckOut from "./components/CheckOut";
import UserEdit from "./components/UserEdit";
import UserShow from "./components/UserShow";
import Footer from "./components/Footer";
import ListingEdit from "./components/ListingEdit";
import UserIndex from "./components/UserIndex";
import About from "./components/About";
import SearchResults from "./components/SearchResults";


function App() {
  return (
    <>
    <div className='content-wrapper'>
        <Navigation />   
   
        <FilterBar/>

      <div className="page-container">      
        <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/sell">
            <ListingCreate/>
          </Route>
          <Route exact path="/search/:query">
            <SearchResults />
          </Route>
          <Route exact path="/shop"> 
            <ListingIndex />
          </Route>
          <Route exact path="/shop/:query">
            <SearchResults /> 
          </Route>
          <Route exact path="/shop/menswear/:query">
            <SearchResults /> 
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
          <Route exact path="/myprofile/edit">
            <UserEdit />
          </Route>
          <Route exact path="/myprofile/">
            <UserShow />
          </Route>
          <Route exact path="/users/:userId">
            <UserIndex />
          </Route>
          <Route exact path='/' >
            <HomePage />  
          </Route>
          <Redirect to='/' />
        </Switch>

        
      <div className='footer-container'>
          <Footer />

      </div>
    </div>
  </div>


    </>
  );
}

export default App;
