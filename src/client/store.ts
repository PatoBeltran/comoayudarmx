import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const configureStore = (middleware: any[] = [], preloadedState?: any) => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk),
  ...middleware.map((m) => applyMiddleware(m))
);

export default configureStore;