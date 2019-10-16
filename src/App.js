import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withMobileContext } from "./modules/MobileContext";
import ReactGA from "react-ga";
import Navbar from "./components/screens/navbar";
import NavbarMobile from "./components/screens/navbarMobile";
import HomeGroup from "./components/screens/homegroup";
import InterAdvisor from "./components/screens/interadvisor";
import AllAdvisors from "./components/screens/alladvisors";

import './App.css';


class App extends Component {
  componentDidMount = () => {
    this.initializeReactGA();
  };
  initializeReactGA = () => {
    ReactGA.initialize("UA-120801966-2");
    ReactGA.pageview("/");
  };
  renderNavbar = () => {
    const { isSmallScreen, isMobile } = this.props;
    if (isSmallScreen || isMobile) return <NavbarMobile isMobile={isMobile} isSmallScreen={isSmallScreen}/>;
    return <Navbar />;
  };
  render() {
    const { isMobile, isSmallScreen } = this.props;
    return (
      <Fragment>
        {this.renderNavbar()}
        <Switch>
        <Route exact path="/" isMobile={isMobile} isSmallScreen={isSmallScreen} component={HomeGroup} />
        <Route path="/advisor/:id" isMobile={isMobile} isSmallScreen={isSmallScreen} component={InterAdvisor} />
        <Route path="/advisors/" isMobile={isMobile} isSmallScreen={isSmallScreen} component={AllAdvisors} />
        </Switch>
        
      </Fragment>
    );
  }
}

export default withMobileContext(App);
