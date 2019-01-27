import React, {Component} from 'react';
import navbarEffects from '../navbar/navbarEffects';
import '../navbar/navbar.css';
class Nav extends Component  {
componentDidMount() {
  navbarEffects()
}
render() {
  return (
    /*Start navbar*/
      <div className="nav">
        <div className="container">
          <ul className="list-unstyled mr-auto">
              <li className="menu-button"><i className="fa fa-bars"></i></li>
              <li><i className="fa fa-search search-button"></i></li>
              <input type="search" placeholder="search.."/>
            </ul>
            <ul className="list-unstyled ml-auto">
              <button className="btn">+ add project</button>
              <li><i className="fa fa-file"></i></li>
              <li><i className="fa fa-envelope"></i></li>
              <li><i className="fa fa-bell"></i></li>
              <li><i className="fa fa-user-circle fa-lg"></i></li>
          </ul>
        </div>
      </div>
    /*End navbar*/
    )
  }
}

export default Nav;

