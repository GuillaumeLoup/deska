import React, { Component, Fragment } from 'react';

// Constants ---------------------------------------
import * as Colors from "../../../constants/Colors";
import * as FontWeight from "../../../constants/Fonts";
import Conseillers from "../../../constants/Conseillers";

// UI components -----------------------------------
import SectionWrapper from "../../ui/Section";
import Title from "../../ui/Title";
import Text from "../../ui/Text";
import ResponsiveWrapper from "../../ui/ResponsiveWrapper";

class InterAdvisor extends Component {
  render() {
    const { isMobile, isSmallScreen } = this.props;
    const id = this.props.match.params.id;
    console.log(this.props.match.params.id)
    return(
     <Fragment>
       <SectionWrapper
          paddingTop={5}
          minHeight={isMobile ? 60 : 80}
          direction="column"
          align="center"
        >
          <Title
            width={100}
            font={{ weight: FontWeight.Bold, size: isMobile ? 2.8 : isSmallScreen ? 3 : 4}}
            textColor={Colors.black}
            marginBottom={20}
          >
             {Conseillers[id -1].name}
            </Title>
            <img src={Conseillers[id -1].note} alt="note"/>
          <ResponsiveWrapper
            direction="row"
            width={100}
            padding={5}
          >
            <ResponsiveWrapper
              width={40}
            >
            <img style={{width: "100%", height: "100%", top: "0", right: "0", boxShadow: "6px 5px 5px grey"}} src={Conseillers[id -1].img2} alt={Conseillers[id -1].name} />
            </ResponsiveWrapper>
            <ResponsiveWrapper
            width={100}
              direction="column"
              paddingLeft={10}
              paddingTop={5}
            >
              
          <ResponsiveWrapper
            direction="row"
            width={100}
            marginBottom={30}
          >
            <Text
              width={20}
              font={{ weight: FontWeight.Bold, size: isMobile ? 2.8 : isSmallScreen ? 3 : 2}}
            >
                Fonction: 
              </Text>
              <Text
              width={70}
                font={{ weight: FontWeight.Regular, size: isMobile ? 2.8 : isSmallScreen ? 3 : 2}}
              >
                {Conseillers[id -1].fonction}
              </Text>
              </ResponsiveWrapper>
              <ResponsiveWrapper
            direction="row"
            width={100}
            marginBottom={30}
          >
            <Text
              width={20}
              font={{ weight: FontWeight.Bold, size: isMobile ? 2.8 : isSmallScreen ? 3 : 2}}
            >
                Description: 
              </Text>
              <Text
              width={70}
                font={{ weight: FontWeight.Regular, size: isMobile ? 2.8 : isSmallScreen ? 3 : 2}}
              >
                {Conseillers[id -1].description}
              </Text>
              </ResponsiveWrapper>
              <ResponsiveWrapper
            direction="row"
            width={100}
          >
            <Text
              width={20}
              font={{ weight: FontWeight.Bold, size: isMobile ? 2.8 : isSmallScreen ? 3 : 2}}
            >
                Experience: 
              </Text>
              <Text
              width={70}
                font={{ weight: FontWeight.Regular, size: isMobile ? 2.8 : isSmallScreen ? 3 : 2}}
              >
                {Conseillers[id -1].experience}
              </Text>
              </ResponsiveWrapper>
           </ResponsiveWrapper>
            </ResponsiveWrapper>
            </SectionWrapper>
            </Fragment>
    )
  }
}

export default InterAdvisor;