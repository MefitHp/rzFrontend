import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Main = () => (
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
);

const WithRouter = () => (
    <BrowserRouter>
        <Main />
    </BrowserRouter>
);


ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
