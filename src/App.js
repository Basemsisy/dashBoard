import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/home';
import Workflow from './components/workflow/workflow'
import Calender from './components/calender/calender';
import Users from './components/users/users';
import Map from './components/map/map';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Sidebar/>
            <Route exact path="/" component={Home}/>
            <Route path="/workflow" component={Workflow}/>
            <Route path="/calender" component={Calender}/>
            <Route path="/users" component={Users}/>
            <Route path="/map" component={Map}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
