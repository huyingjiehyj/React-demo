import React from 'react'

const Mytaobao = (props) => {
    return (
        <div>
            我的淘宝
            <button onClick={props.history.goBack}>返回</button>
        </div>
        
    )
}

export default Mytaobao