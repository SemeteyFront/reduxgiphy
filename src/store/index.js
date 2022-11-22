import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer } from '../async/reducer';

const rootReducer = combineReducers({
  reducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
