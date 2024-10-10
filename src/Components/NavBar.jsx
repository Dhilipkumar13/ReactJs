import React, { Component } from 'react';
import Counters from './Counters';

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <h2> Navbar : {this.props.onCount()}</h2></a>
            </nav>
        );
    }
}
 
export default NavBar;