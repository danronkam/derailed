import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import listingsReducer from './listings';
import usersReducer from './user';
import commentsReducer from './comment';

const rootReducer = combineReducers({
  session: sessionReducer,
  users: usersReducer,
  listings: listingsReducer,
  comments: commentsReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  // const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    // enhancer = composeEnhancers(applyMiddleware(thunk, logger));

  enhancer = composeEnhancers(applyMiddleware(thunk));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };
  
export default configureStore;
  