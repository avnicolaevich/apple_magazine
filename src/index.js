import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorIndicator from "./components/wrappers-components/error-indicator";
import store from "./store";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store = {store}>
        <ErrorIndicator>
            <Router>
                <App/>
            </Router>
        </ErrorIndicator>
    </Provider>,
document.getElementById('root'));
