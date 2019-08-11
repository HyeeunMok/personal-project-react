import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  loggedIn: false,
  username: "",
  firstName: "",
  profile: {},
  followers: [],
  events: [],
  forkEvents: [],
  pullRequestEvents: []
};

const rootReducer = (state = initialState, action) => {
  console.log('Action in the Reducer: ', action);

  switch (action.type) {
    case "CHANGE_USERNAME":
      return {
        ...state,
        username: action.payload
      };
    case "CHANGE_FIRST_NAME":
      return {
        ...state,
        firstName: action.payload
      }
    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
        profile: action.payload
      }
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
        profile: {}
      }
    case "FETCH_FOLLOWERS":
      return {
        ...state,
        followers: action.payload
      }
    case "FETCH_EVENTS":
      return {
        ...state,
        events: action.payload,
        forkEvents: action.payload.filter(e => e.type === 'ForkEvent'),
        pullRequestEvents: action.payload.filter(e => e.type === 'PullRequestEvent')
      }
    default:
      return state;
  }
};
  
// export default createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunk),
// );

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancer(
      applyMiddleware(thunk), /* enhancer(middleware) */
    )
  );
