import React from 'react';
import ReactDOM from 'react-dom';
import UIkit from 'uikit';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min';
import Icons from 'uikit/dist/js/uikit-icons.min';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import reduxThunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import { reducers } from './reducers';


UIkit.use(Icons);
window.axios = axios;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
