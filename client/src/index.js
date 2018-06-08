import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons.min';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min';

import App from './App';

import { config as configAxios } from './utils/axiosConfig';
import { store } from './utils/storeCreator';


UIkit.use(Icons);
configAxios();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
