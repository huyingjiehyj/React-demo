import React from 'react'

const Cart = (props) => {
    return (
        <div>
            购物车
            <button onClick={props.history.goBack}>返回</button>
            <span className='iconfont icon-geren'></span>
        </div>
    )
}
export default Cart;
