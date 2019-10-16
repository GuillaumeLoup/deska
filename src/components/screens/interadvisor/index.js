import React, { Component, Fragment } from 'react';
import { withMobileContext } from "../../../modules/MobileContext";
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
          paddingTop={isMobile ? 15 : isSmallScreen ? 12 : 5}
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
            direction={isSmallScreen ? "column" : "row"}
            align={isSmallScreen ? "center" : null}
            width={100}
            padding={5}
          >
            <ResponsiveWrapper
              width={isSmallScreen ? 60 : 40}
              heightPercent={isSmallScreen ? 40 : 100}
              marginBottom={isMobile ? 30 : null}
            >
            <img style={{width:"100%" , height: "100%", top: "0", right: "0", boxShadow: "6px 5px 5px grey"}} src={Conseillers[id -1].img2} alt={Conseillers[id -1].name} />
            </ResponsiveWrapper>
            <ResponsiveWrapper
            width={100}
              direction="column"
              paddingLeft={isSmallScreen ? 2 : 10}
              paddingTop={5}
            >
              
          <ResponsiveWrapper
            direction={isSmallScreen ? "column" : "row"}
            width={100}
            marginBottom={30}
          >
            <Text
              width={isSmallScreen ? 30 : 20}
              font={{ weight: FontWeight.Bold, size: isMobile ? 1.8 : isSmallScreen ? 2 : 2}}
              marginBottom={isSmallScreen ? 20 : null}
            >
                Fonction: 
              </Text>
              <Text
              width={isSmallScreen ? 100 : 70}
                font={{ weight: FontWeight.Regular, size: isMobile ? 1.8 : isSmallScreen ? 2 : 2}}
              >
                {Conseillers[id -1].fonction}
              </Text>
              </ResponsiveWrapper>
              <ResponsiveWrapper
            direction={isSmallScreen ? "column" : "row"}
            width={100}
            marginBottom={30}
          >
            <Text
              width={20}
              font={{ weight: FontWeight.Bold, size: isMobile ? 1.8 : isSmallScreen ? 2 : 2}}
              marginBottom={isSmallScreen ? 20 : null}
            >
                Description: 
              </Text>
              <Text
              width={isSmallScreen ? 100 : 70}
                font={{ weight: FontWeight.Regular, size: isMobile ? 1.8 : isSmallScreen ? 2 : 2}}
              >
                {Conseillers[id -1].description}
              </Text>
              </ResponsiveWrapper>
              <ResponsiveWrapper
                direction={isSmallScreen ? "column" : "row"}
                width={100}
              >
                <Text
                  width={20}
                  font={{ weight: FontWeight.Bold, size: isMobile ? 1.8 : isSmallScreen ? 2 : 2}}
                  marginBottom={isSmallScreen ? 20 : null}
                >
                  Experience: 
                </Text>
                <Text
                  width={isSmallScreen ? 100 : 70}
                  font={{ weight: FontWeight.Regular, size: isMobile ? 1.8 : isSmallScreen ? 2 : 2}}
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

export default withMobileContext(InterAdvisor);