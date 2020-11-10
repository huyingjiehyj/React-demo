import React from 'react'

import {BrowserRouter as Router,Redirect,Route,NavLink,Switch} from 'react-router-dom'
import { SearchBar} from 'antd-mobile';
import './Home.css'
import Images from './Images';
import { Button } from 'antd-mobile';
import Mytab from './Mytab';
import Bottom from './Bottom';
import {data} from './actionCreators'
import { connect } from 'react-redux';
const Home=(props)=>{
  props.dispatch(data());
  console.log(props.mydata);
  return(
    <div className='home'>
      <div className="search" onClick={()=>props.history.push('/search')}>
        <div className='search2'>
        <p>寻找宝贝店铺</p>
        </div>
      </div>

      <div className='images'>
        <Images/>
      </div>

      
      <div className='shop' >
                <Route path='/bottom' component={Bottom}/>
                <ul>
                    {
                        props.mydata.map((data,index) => (
                            <li onClick={()=>props.history.push({
                                pathname:'/bottom',
                                img: data.img,
                                index: index
                            })}>
                                <img src={data.img}/>
                                <p>{data.title}</p>
                                <div>
                                <span>￥{data.price}</span>
                                </div>
                            </li>
                        ))
                    }
                    
                    
                    
                </ul>
            </div>
        
      <Mytab/>
    </div>
    
  )


}
  
const mapStateToProps = (state)=>{
    return {
        mydata:state.datalist.datalist
    }
}

export default connect(mapStateToProps)(Home);