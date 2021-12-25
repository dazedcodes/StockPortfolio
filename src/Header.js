import React from 'react';
import './App.css';

function Header(props) {
    return <h2 className="portfolioHeader">{props.name}'s Stock Portfolio</h2>
}
export default Header;