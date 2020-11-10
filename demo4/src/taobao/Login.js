import React, { Component } from 'react'
import './login.css'
import {login} from './actionCreators'
import { connect } from 'react-redux'
const Login = (props) =>  {
        return (
            <div className='login'>
                <div className='top'>
                    <h2>您需要登录才能访问</h2>
                    <button className='cloth' onClick={()=>props.history.push('/home')}>关闭</button>
                </div>
                <img className='logo' src={require('./images/timg.jpg')} ></img>
                <div className='login1'>
                    <input type='number' name='number' placeholder='手机号/邮箱/会员名' className='number'/>
                    <input type='password' name='password' placeholder='请输入登录密码' className='password'/>
                    <p>短信验证码登录</p>
                    <p>免费注册</p>
                </div>
                <div className='btu' 
                onClick={()=>{
                    props.dispatch(login())
                    props.history.push('/collection')
                }}>
                登录
                </div>
            </div>
        )
   
}
export default connect()(Login);

