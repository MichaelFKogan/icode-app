import React from 'react';
import { Link } from 'react-router';

import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';

export default class Header extends React.Component {
  render() {
    return (
      
    <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper container">
        <img id="headerLogo" src="../../css/logo_trans.png"/>
        <a id="logo-container" href="/" className="brand-logo">iCODE</a>
            
        <ul className="right hide-on-med-and-down">
              
            <NotAuthenticated>
                    <li><Link to="/" activeClassName="active">Home</Link></li>
                    <li><Link to="/search" activeClassName="active">Search</Link></li> 
                    <li><LoginLink /></li>
                    <li><Link to="/register" activeClassName="active">Sign Up</Link></li>

                
                    
            </NotAuthenticated>

            <Authenticated>  
                    <li><Link to="/profile" activeClassName="active">Edit Profile</Link></li>
                    <li><Link to="/search" activeClassName="active">Search</Link></li>  
                    <li><LogoutLink /></li>   
            </Authenticated>

        </ul>

      
        </div>
    </nav>
  

    );
  }
}