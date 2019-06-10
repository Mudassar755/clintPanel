import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


const Header = (props) => {
  
    const { branding } = props;

 
    return (
     <nav className = "navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
     <div className = 'container'>
     <a href='/' className = 'navbar-brand'><h3>{ branding }</h3></a>
     </div>
     <div>
         <ul  className = 'navbar-nav mr-auto'>
             <li className = "nav-item"><Link to = "/" className = "nav-link">
             <i className = 'fas fa-home' />Home</Link></li>
             <li className = "nav-item"><Link to = "/contact/add" className = "nav-link">
             <i className = 'fas fa-plus' />Add Contact</Link></li>
             <li className = "nav-item"><Link to = "/about" className = "nav-link">
             <i className = 'fas fa-question' />About</Link></li>

         </ul>
     </div>
     </nav>
    );
  }


// Header.defaultProps = {
//     branding: 'My App'
// }

export default Header;

