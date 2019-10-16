import React, { Component } from 'react';
import { withMobileContext } from "../../../modules/MobileContext";

import Home from "../home";
import HowItWorks from "../fonctionnement";
import Questions from "../questions";
import WhyDeskalia from "../whyDeskalia";
import Plans from "../plans";
import Advisor from "../conseillers";
import MobileAdvisor from "../conseillers/MobileAdvisor";

class HomeGroup extends Component {
  render() {
    const { isMobile, isSmallScreen } = this.props;
    console.log(isMobile)
    return(
      <div>
      <Home isMobile={isMobile} isSmallScreen={isSmallScreen} />
      <HowItWorks isMobile={isMobile} isSmallScreen={isSmallScreen} />
      <Questions isMobile={isMobile} isSmallScreen={isSmallScreen} />
      <WhyDeskalia isMobile={isMobile} isSmallScreen={isSmallScreen} />
      <Plans isMobile={isMobile} isSmallScreen={isSmallScreen} />
      {
        isMobile ?
        <MobileAdvisor isMobile={isMobile} isSmallScreen={isSmallScreen} />
        :
        <Advisor isMobile={isMobile} isSmallScreen={isSmallScreen} />
      }
      
      </div>
    )
  }
}

export default withMobileContext(HomeGroup);