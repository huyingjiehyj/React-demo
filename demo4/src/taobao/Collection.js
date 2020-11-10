import React from 'react'
import { connect } from 'react-redux'
import './Collection.css'

const Collection = (props) => {
    return (
        <div className='list'>
            <ul>
                <button
                    className='backs'
                    onClick = {()=>props.history.push('/home')}
                >返回</button>
                {
                    props.collection.map((data, index) => (
                        <li key={index} className="lists">
                            <img src={data.img} style={{width:'100px'}}/>
                            <p>{data.title}</p>
                            <div>
                                <span>￥{data.price}</span>
                            </div>
                            <button
                                className="del"
                                onClick = {()=>{
                                    props.dispatch({
                                        type:'DELETE',
                                        index:index
                                    })
                                }}
                            >取消收藏</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        mydata: state.datalist.datalist,
        collection: state.shoucang
    }
}

export default connect(mapStateToProps)(Collection)

