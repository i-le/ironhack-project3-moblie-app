/*
登陆路由组件
*/

import React from 'react';
import {NavBar, WingBlank, List, InputItem, WhiteSpace, Radio, Button} from 'antd-mobile'
import Logo from '../../components/logo/Logo'

const ListItem = List.Item

export default class Register extends React.Component {
    
    state = {
        username: '',
        password: ''
    }

    login = () => {
        console.log(this.state)
    }
// 处理输入数据的改变： 更新对应的状态 改变name值
    handleChange = (name, val) => {

        this.setState ({
            [name]: val //属性名不是name,而是name这个变量的值
        })
    }

    //事件回调函数, 事件：点击按钮以后 去login页面 函数：toLogin
    toRegister = () => {
        this.props.history.replace('/register')
    }


    render() {
        return (
            <div>
            <NavBar>
                BEST SC2 Club NA
            </NavBar>
            <Logo />
            <WingBlank>
                <List>
                    <WhiteSpace />
                    <InputItem placeholder='please enter your username' onChange={val => {this.handleChange('username', val)}}>Username&nbsp;:</InputItem>
                    <WhiteSpace />
                    <InputItem placeholder='please enter your password' type="password" onChange={val => {this.handleChange('password', val)}}>Password &nbsp;:</InputItem>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.login}>Login</Button>
                    <WhiteSpace />
                    <Button onClick={this.toRegister}>Creat Account</Button>
                </List>
            </WingBlank>
            </div>
        )
    }
}