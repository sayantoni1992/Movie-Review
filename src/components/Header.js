import React from 'react';
import Searchbar from './Searchbar';
import './styles/Header.css';


function Header() {
    return (
       <div className="header">
           <h2>Movie Reviews</h2>
           <Searchbar />
       </div>
    )
}

export default Header;