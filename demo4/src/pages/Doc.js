import React, { useEffect } from 'react'
import {
    NavLink, Route, Redirect,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch,
    withRouter
} from 'react-router-dom'
import './doc.css'
import {RouteWithSubRoutes} from '../App';


const Doc = ({routes}) => {

    return (
        <div className='doc'>           
            <div className="content">              
            {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}	  
                <Redirect from='/doc' to='/doc/core' />
            </div>
            <ol>
                <li><NavLink to='/doc/core'>核心概念</NavLink></li>
                <li><NavLink to='/doc/guide'>高级指引</NavLink></li>
                <li><NavLink to='/doc/api'>API</NavLink></li>
                <li><NavLink to='/doc/hooks'>Hooks</NavLink></li>
            </ol>
        </div>
    )
}



export default withRouter(Doc);
