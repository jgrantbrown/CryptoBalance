import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
// Connect Reducer
import manageCrypto from './reducers/manageCrypto';
// ADD REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// USING for routing
import { BrowserRouter as Router, Route } from 'react-router-dom';


// TO BE DETERMINED NAME OF REDUCERS
const store = createStore(manageCrypto, applyMiddleware(thunk));
const rootElement = document.getElementById('root');

ReactDOM.render(

    <Provider store={store} >
      <Router>
          <Route path="/" component={App} />
      </Router>
    </Provider>
  , rootElement);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
