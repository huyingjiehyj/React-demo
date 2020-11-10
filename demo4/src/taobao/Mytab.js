import React from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import{Button,TabBar} from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';


class Mytab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden:false,
      fullScreen: false,
    };
  }

  render() {
    const {pathname}=this.props.location;
    return (        
      <div style={{   position:'fixed',bottom:'0',width: '100%'}}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
		      barTintColor="white"
        >
          <TabBar.Item
            title='首页'
            key="首页"
            icon={
                <img src={require('./images/home.png')}></img>
            }
            selectedIcon={
              <img style={{width:'22px'}} src={require('./images/home.png')}></img>
            }
			      selected={pathname === '/home'}
            onPress={() => {
              this.props.history.push('/home');
            }}
            data-seed="logId"
          >
          </TabBar.Item>

          <TabBar.Item
            icon={
              <img style={{width:'22px'}} src={require('./images/cart.png')}></img>
			}
			selectedIcon={
				<img style={{width:'22px'}} src={require('./images/cart.png')}></img>
			}
            title="收藏"
            key="收藏"
            selected={pathname === '/collection'}
            onPress={() => {
              if(this.props.username){
                this.props.history.push('/collection')
              }else{
                this.props.history.push('/login')
              }
              
            }}
            data-seed="logId1"
          >
          </TabBar.Item>

          <TabBar.Item
            icon={
              <img style={{width:'22px'}} src={require('./images/dingdan.png')}></img>
            }
            selectedIcon={
              <img style={{width:'22px'}} src={require('./images/dingdan.png')}></img>
            }
            title="订单列表"
            key="订单列表"
            selected={pathname === 'dingdanliebiao'}
            onPress={() => {
                this.props.history.push('/dingdanliebiao')
            }}
          >
          </TabBar.Item>

		  <TabBar.Item
            icon={
              <img style={{width:'22px'}} src={require('./images/geren.png')}></img>
            }
            selectedIcon={
              <img style={{width:'22px'}} src={require('./images/geren.png')}></img>
            }
            title="我的淘宝"
            key="我的淘宝"
            selected={pathname === '/mytaobao'}
            onPress={() => {
                this.props.history.push('/mytaobao')
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
      username:state.home.username
  }
}


export default connect(mapStateToProps)(withRouter(Mytab));