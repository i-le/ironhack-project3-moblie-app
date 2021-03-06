import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Register from './containers/register/Register';
import Main from './containers/main/Main';
import Login from './containers/login/Login';
import {Provider} from 'react-redux';
import Store from "./redux/Store"



ReactDOM.render((
    <Provider store={Store}>
        <HashRouter>
            <Switch>
                <Route path='/register' component={Register}></Route>
                <Route path='/login' component={Login}></Route>
                <Route component={Main}></Route> {/* 默认路由 */}
            </Switch>     
            </HashRouter>
    </Provider>
    ), document.querySelector('#root'))
