//@flow
import React, { Component, Fragment } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { generate_font } from "../../../utils/font-generator";

// UI components -----------------------------------
import SectionWrapper from "../../ui/Section";

import Title from "../../ui/Title";
import ResponsiveWrapper from "../../ui/ResponsiveWrapper";

// Constants ---------------------------------------
import * as Colors from "../../../constants/Colors";
import * as FontWeight from "../../../constants/Fonts";

// Assets ------------------------------------------
import One from "../../../assets/iconone.jpg";
import Two from "../../../assets/icontwo.jpg";
import Three from "../../../assets/iconthree.jpg";

class HowItWorks extends Component {
  render() {
    const { isMobile, isSmallScreen } = this.props;
    return(
      <Fragment>
       <SectionWrapper
          minHeight={isMobile ? 50 : isSmallScreen ? 60 : 40}
          direction="column"
          align="center"
          backgroundColor="#8ea638"
          
        >
          <Title
              font={{ weight: FontWeight.Black, size: isMobile ? 2.3 : isSmallScreen ? 3 : 4}}
              textColor={Colors.white}
            >
              Comment ça fonctionne ?
            </Title>
           <ResponsiveWrapper
           width={100}
            direction="row"
            justify="center"
            marginTop={isMobile || isSmallScreen ? "80" : "80"}
          >
            
            

          </ResponsiveWrapper>
        </SectionWrapper>
        </Fragment>
    )
  }
}

export default HowItWorks;