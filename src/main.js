import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Signup from "./SignUp";
import Signin from "./SignIn";
import profile from "./Profile";
import courses from "./Courses";
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
//import {Button , Menu , MenuItem , Popover } from "@blueprintjs/core";
//import {
//  Collapse,Navbar,  NavbarToggler,  NavbarBrand,  Nav,  NavItem,  Container,  Row,  Col,  Jumbotron,
//  Button} from 'react-bootstrap';



class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
          <li><NavLink to="/">الصفحة الرئيسية</NavLink></li>
          <li><NavLink to="/SignUp">تسجيل جديد</NavLink></li>
            <li><NavLink to="/SignIn">تسجيل دخول</NavLink></li>
              <li><NavLink to="/Profile">الملف الشخصي</NavLink></li>
              <li><NavLink to="/Courses">البرامج التدريبية</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/SignUp" component={Signup}/>
              <Route path="/SignIn" component={Signin}/>
                <Route path="/Profile" component={profile}/>
                  <Route path="/Courses" component={courses}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}



export default Main;
