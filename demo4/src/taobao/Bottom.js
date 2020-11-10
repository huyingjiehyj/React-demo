//详情页
import { Button } from 'antd-mobile'
import React from 'react'
import { connect } from 'react-redux';
import './Bottom.css';

const Bottom = (props) => {
    return (

        <div className='buttom1'>
            <div>
                <div className='image'><img src={props.location.img} /></div>
                <div className='back' onClick={() => props.history.goBack()}>
                    <p>返回</p>
                </div>
            </div>
            <div className='btn'>
                <ul>
                    <li>
                        <div className='btn1'>
                            <p>店铺</p>
                        </div>
                    </li>
                    <li>
                        <div className='btn1'>
                            <p>客服</p>
                        </div>
                    </li>
                    <li>
                        <div className='btn1'
                            onClick={() => {
                                props.dispatch({
                                    type: 'ADD',
                                    value: props.datalist[props.location.index]
                                })
                                document.getElementById('img').src = require('./images/shoucangh.png')
                            }}
                        >



                            <img style={{ width: '22px' }} src={require('./images/shoucang.png')} id='img'></img>
                                收藏
                        </div>
                    </li>
                </ul>

                <button className='btn2'>
                    <p>加入购物车</p>
                </button>
                <button className='btn3'>
                    <p>立即购买</p>
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        datalist: state.datalist.datalist,
        shoucang: state.shoucang
    }
}

export default connect(mapStateToProps)(Bottom)
