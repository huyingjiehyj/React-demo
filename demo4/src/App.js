import React from 'react'
import {HashRouter as Router,Redirect,Route,Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './taobao/Home';
// import Cart from './taobao/Cart';
import List from './taobao/List';
import Mytaobao from './taobao/Mytaobao';
import Collection from './taobao/Collection';
import Search from './taobao/Search';
import Bottom from './taobao/Bottom';
import Login from './taobao/Login';
import store from './taobao/store';

const App = ()=>{
	return <Provider store={store}>
		<Router>
			<Redirect to='/home'/>
			<Switch>
				<Route exact path='/home' component={Home}/>
				{/* <Route path='/cart' component={Cart}/> */}
				<Route path='/dingdanliebiao' component={List}/>
				<Route path='/mytaobao' component={Mytaobao}/>
				<Route path='/search' component={Search}/>
				<Route path='/bottom' component={Bottom}/>
				<Route path='/collection' component={Collection}/>
				<Route path='/login' component={Login}/>
			</Switch>	
		</Router>
	</Provider>
}
export default App;



















// function PrivateRoute({ component:Com, ...rest }) {
// 	return (
// 	  <Route
// 		{...rest}
// 		render={({ location }) =>
// 		   localStorage.getItem('userinfo')
// 		   ?<Com /> 
// 		   : (
// 			<Redirect
// 			  to={{
// 				pathname: "/login",
// 				state: location 
// 			  }}
// 			/>
// 		  )
// 		}
// 	  />
// 	);
//   }

// const App = ()=>{
// 	return <Router>
// 		<Header/>
// 		<Switch>
// 			{/* 2020/10/12 */}
// 			{

// 				routes.map(({pri,...rest})=>{
// 					// <Route exact={route.exact} path={route.path} component={route.component} />
// 					if(!pri){
// 						return <Route {...rest}/>
// 					}
// 					else{
// 						return <PrivateRoute {...rest}/>
// 					}
					
// 				})
// 			}
				
			
// 			{/*2020/10/5*/}
// 			{/* home组件这种配置方式会在Home组件的props内注入四个属性 */}
// 			{/* /:id */}
// 			{/* <Route exact path='/' component={Home1} />
			
// 			<PrivateRoute path='/doc' component={Doc} />
// 			<PrivateRoute path='/tuto' component={Tuto}/>
// 			<PrivateRoute path='/blog' component={Blog}/>
// 			<Route path='/comm' component={Comm}/>
// 			<Route path='/login' component={Login}/>
// 			<Router component={()=><div>404</div>}/>
//       <Router path='*' component={()=><div>404</div>}/> */}
// 		</Switch>
// 	</Router>
// }

