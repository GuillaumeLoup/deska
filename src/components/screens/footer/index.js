import React, { Component, Fragment } from 'react';

// Constants ---------------------------------------
import * as Colors from "../../../constants/Colors";
import * as FontWeight from "../../../constants/Fonts";

// UI components -----------------------------------
import SectionWrapper from "../../ui/Section";
import Title from "../../ui/Title";
import ResponsiveWrapper from "../../ui/ResponsiveWrapper";
import Button from "../../ui/Buttons";
import Text from "../../ui/Text";

class Footer extends Component {
  render() {
    const { isMobile, isSmallScreen } = this.props;
    return(
      <Fragment>
       <SectionWrapper
          minHeight={isMobile ? 60 : 25}
          width={100}
          direction="column"
          align="center"
          paddingTop={10}
        >

        </SectionWrapper>
      </Fragment>
    )
  }
}

export default Footer;