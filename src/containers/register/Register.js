/*
注册路由组件
*/

import React from 'react';
import {NavBar, WingBlank, List, InputItem, WhiteSpace, Radio, Button} from 'antd-mobile'
import Logo from '../../components/logo/Logo'

const ListItem = List.Item

export default class Register extends React.Component {
    
    state = {
        username: '',
        password: '',
        password2: '',
        type: 'boss'
    }

    register = () => {
        console.log(this.state)

    }
// 处理输入数据的改变： 更新对应的状态 改变name值
    handleChange = (name, val) => {

        this.setState ({
            [name]: val //属性名不是name,而是name这个变量的值
        })
    }

    //事件回调函数, 事件：点击按钮以后 去login页面 函数：toLogin
    toLogin = () => {
        this.props.history.replace('/login')
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
                    <InputItem placeholder='please confrim your password' type="password" onChange={val => {this.handleChange('password', val)}}>Re-enter&nbsp;&nbsp;&nbsp;:</InputItem>
                    <WhiteSpace />
                    <ListItem>
                        <span>Who U&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Radio checked={this.state.type === 'ranker'} onChange={() => this.handleChange('type', 'ranker')}>Ranker</Radio>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Radio checked={this.state.type === 'boss'} onChange={() => this.handleChange('type', 'boss')}>Boss</Radio>
                    </ListItem>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.register}>Register</Button>
                    <WhiteSpace />
                    <Button onClick={this.toLogin}>Account</Button>
                </List>
            </WingBlank>
            </div>
        )
    }
}