import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import { Provider } from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/home';
import {Volunteer} from './pages/volunteer';
import {Contact} from './pages/contact';

import registerServiceWorker from './scripts/registerServiceWorker';
import configureStore from './store'

const store = configureStore();

const rootEl = document.getElementById("root");
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter >
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/volunteers' component={Volunteer}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  </AppContainer>,
  rootEl
);

registerServiceWorker();