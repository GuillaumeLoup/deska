import React, { Component, Fragment } from 'react';
import { withMobileContext } from "./modules/MobileContext";
import ReactGA from "react-ga";
import Navbar from "./components/screens/navbar";
import NavbarMobile from "./components/screens/navbarMobile";
import Home from "./components/screens/home";
import HowItWorks from "./components/screens/fonctionnement";
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
        <Home isMobile={isMobile} isSmallScreen={isSmallScreen} />
        <HowItWorks isMobile={isMobile} isSmallScreen={isSmallScreen} />
        
      </Fragment>
    );
  }
}

export default withMobileContext(App);
