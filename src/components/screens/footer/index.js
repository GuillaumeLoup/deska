import React, { Component, Fragment } from 'react';
import ScrollableAnchor from "react-scrollable-anchor";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Constants ---------------------------------------
import * as Colors from "../../../constants/Colors";
import * as FontWeight from "../../../constants/Fonts";

// UI components -----------------------------------
import SectionWrapper from "../../ui/Section";
import ResponsiveWrapper from "../../ui/ResponsiveWrapper";
import Link from "../../ui/Link";
import Text from "../../ui/Text";

class Footer extends Component {
  render() {
    const { isMobile, isSmallScreen } = this.props;
    return(
      <Fragment id="footer">
        <ScrollableAnchor >
       <SectionWrapper
          minHeight={isMobile ? 20 : 20}
          width={100}
          direction="column"
          align="center"
          backgroundColor={Colors.darkGrey}
          marginTop={isMobile ? 50 : null}
        >
          <ResponsiveWrapper
            width={100}
            justify="center"
            alignSelf="center"
            center
            paddingTop={2}
          >
            
              <Text
                font={{size: 4, weight: FontWeight.Bold}} 
                letterSpacing="10"
                bolder
                textColor={Colors.green}
                
              >
                DESKALIA
              </Text>
              </ResponsiveWrapper>
              <ResponsiveWrapper
               width={100}
               direction="row"
               alignSelf="center"
               center
              >
                <FontAwesomeIcon
                  icon="twitter"
                  color="#d4debb"
                  size="md"
                />
                <FontAwesomeIcon
                  icon="map-marker-alt"
                  color="#d4debb"
                  size="lg"
                />

              </ResponsiveWrapper>
            
          
        </SectionWrapper>
        </ScrollableAnchor>
      </Fragment>
    )
  }
}

export default Footer;