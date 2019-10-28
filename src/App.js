import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withMobileContext } from "./modules/MobileContext";
import ReactGA from "react-ga";
import Navbar from "./components/screens/navbar";
import NavbarMobile from "./components/screens/navbarMobile";
import HomeGroup from "./components/screens/homegroup";
import InterAdvisor from "./components/screens/interadvisor";
import AllAdvisors from "./components/screens/alladvisors";
import Footer from "./components/screens/footer";
import Video from "./components/screens/contact/Video";

import { library } from '@fortawesome/fontawesome-svg-core';
import {faGraduationCap, faCalendarAlt, faMapMarkerAlt, faGavel } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from  "@fortawesome/free-brands-svg-icons";
import './App.css';

library.add(faGraduationCap, faCalendarAlt, faMapMarkerAlt, faGavel, faTwitter);

class App extends Component {
  componentDidMount = () => {
    this.initializeReactGA();
  };
  initializeReactGA = () => {
    ReactGA.initialize("UA-120801966-2");
    
  };
  renderNavbar = () => {
    const { isSmallScreen, isMobile } = this.props;
    if (isSmallScreen || isMobile) return <NavbarMobile isMobile={isMobile} isSmallScreen={isSmallScreen}/>;
    return <Navbar />;
  };
  render() {
    const { isMobile, isSmallScreen, history } = this.props;
    return (
      <Fragment>
        {this.renderNavbar()}
        <Switch>
        <Route exact path="/" isMobile={isMobile} isSmallScreen={isSmallScreen} component={HomeGroup} />
        <Route path="/advisor/:id" isMobile={isMobile} isSmallScreen={isSmallScreen} component={InterAdvisor} />
        <Route path="/advisors" isMobile={isMobile} isSmallScreen={isSmallScreen} component={AllAdvisors} />
        <Route path="/:roomId" history={history} exact component={Video}/>
        </Switch>
        <Footer isMobile={isMobile} isSmallScreen={isSmallScreen} />
      </Fragment>
    );
  }
}

export default withMobileContext(App);
