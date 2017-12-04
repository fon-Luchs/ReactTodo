import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './component/App.jsx';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
    ,document.getElementById('app')
);