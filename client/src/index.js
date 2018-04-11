import React from 'react';
import ReactDOM from 'react-dom';
import UIkit from 'uikit';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min';
import Icons from 'uikit/dist/js/uikit-icons.min';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


UIkit.use(Icons);
window.axios = axios;

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
