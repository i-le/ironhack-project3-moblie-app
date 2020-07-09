import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Register from './containers/register/Register';
import Main from './containers/main/Main';
import Login from './containers/login/Login';



ReactDOM.render(
    <HashRouter>
    <Switch>
        <Route path='/register' component={Register}></Route>
        <Route path='/login' component={Login}></Route>
        <Route component={Main}></Route> {/* 默认组件 */}
    </Switch>     
    </HashRouter>
    <App />, document.querySelector('#root')
)