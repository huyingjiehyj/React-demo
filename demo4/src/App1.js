import React from 'react';
import { BrowserRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom'
import Header from './pages/Header';
import routes from './router.config';
import Doc from './pages/Doc';


function PrivateRoute({ component: Com, ...rest }) {
	return (
		<Route
			{ ...rest }
			render={ ({ location }) =>
				localStorage.getItem('userinfo')
					? <Com { ...rest} />
					: (
						<Redirect
							to={ {
								pathname: "/login",
								state: location
							} }
						/>
					)
			}
		/>
	);
}
export function RouteWithSubRoutes(route) {
	if(route.pri){
		return <PrivateRoute {...route}></PrivateRoute>
	}
	else{
		return (
	  <Route
		path={route.path}
		render={props => (
		  <route.component {...props} routes={route.routes} />
		)}
	  />
	);
	}
	
  }

const App = () => {
	return <Router>
		<Header />
		<Switch>
		{routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
		</Switch>
	</Router>
}
export default App;

/*
//react-router-dom
import {BrowserRouter} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';

<Router>
	<div>title</div>
	<switch>
	<Route exact path='/' component={}/>  
//exact(严格匹配)
	<Route path='/doc/:id' component={DOC1} />
	<Route path='/doc' component={DOC} />
	<Route />
	<route component={'not found'}/>

	</switch>
</Router>

*/