import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './sidebar.css';
import $ from 'jquery'
class Sidebar extends Component {
  componentDidMount() {
    //toggle sidebar
    $('li a').click(function () { 
      if($(document).width() <= 1200) {
        $(this).parent().parent().parent().slideUp(200);
        $(this).parent().toggleClass('active').siblings().removeClass('active')
      }
      else {
        $(this).parent().toggleClass('active').siblings().removeClass('active')
      }
    })
  }
  render() {
    return (
      <aside>
        <header>
          <h2><i className=" fa fa-cloud"></i> logo here</h2>
        </header>
        <ul className="list-unstyled">
          <li className="active"> 
            <i className="fa fa-home"></i>
            <NavLink to="/"> home</NavLink>
          </li>
          <li>
            <i className="fa fa-home"></i>
            <NavLink to="workflow"> workflow</NavLink>
          </li>
          <li>
            <i className="fa fa-calendar"></i>
            <NavLink to="calender"> calender</NavLink>
          </li>
          <li>
            <i className="fa fa-user"></i>
            <NavLink to="users"> users</NavLink>
          </li>
          <li>
            <i className="fa fa-cog"></i>
            <NavLink to="map"> map</NavLink>
          </li>
        </ul>
      </aside>
    )
  }
}
export default Sidebar;