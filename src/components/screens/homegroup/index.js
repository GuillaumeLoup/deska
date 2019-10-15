import React, { Component } from 'react';


import Home from "../home";
import HowItWorks from "../fonctionnement";
import Questions from "../questions";
import WhyDeskalia from "../whyDeskalia";
import Plans from "../plans";
import Advisor from "../conseillers";

class HomeGroup extends Component {
  render() {
    const { isMobile, isSmallScreen } = this.props;
    return(
      <div>
      <Home isMobile={isMobile} isSmallScreen={isSmallScreen} />
      <HowItWorks isMobile={isMobile} isSmallScreen={isSmallScreen} />
      <Questions isMobile={isMobile} isSmallScreen={isSmallScreen} />
      <WhyDeskalia isMobile={isMobile} isSmallScreen={isSmallScreen} />
      <Plans isMobile={isMobile} isSmallScreen={isSmallScreen} />
      <Advisor isMobile={isMobile} isSmallScreen={isSmallScreen} />
      </div>
    )
  }
}

export default HomeGroup;