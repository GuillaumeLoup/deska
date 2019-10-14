//@flow
import React, { Component, Fragment } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

// UI components -----------------------------------
import SectionWrapper from "../../ui/Section";
import Title from "../../ui/Title";
import ResponsiveWrapper from "../../ui/ResponsiveWrapper";
import Text from "../../ui/Text";

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
      <ScrollableAnchor id="accueil">
      <Fragment>
       <SectionWrapper
          minHeight={isMobile ? 50 : isSmallScreen ? 40 : 40}
          direction="column"
          align="center"
          backgroundColor="#8ea638"
          
        >
          <Title
            font={{ weight: FontWeight.Black, size: isMobile ? 2.3 : isSmallScreen ? 3 : 4}}
            textColor={Colors.white}
            marginTop={30}
          >
              Comment ça fonctionne ?
            </Title>
           <ResponsiveWrapper
            width={isSmallScreen ? 100 : 75}
            direction={isMobile ? "column" : "row"}
            justify="space-evenly"
            marginTop={isMobile ? 45 : isSmallScreen ? "80" : "80"}
            marginBottom="80"
          >
            <ResponsiveWrapper
              direction="column"
              width={isMobile ? 100 : 30}
              marginBottom={isMobile ? "30" : null}
            >
            <Image
              src={One}
              width={100}
              align="center"
            />
            <Text
              width={isMobile ? 50 : 100}
              font={{size:isMobile ? 1.2 : isSmallScreen ? 2 : 2.6, weight: FontWeight.Bold}}
              textColor={Colors.white}
              align="center"
              center
            >
              Sélectionnez le domaine juridique et le conseiller le plus approprié
            </Text>
            </ResponsiveWrapper>
            <ResponsiveWrapper
              direction="column"
              width={isMobile ? 100 : 30}
              marginBottom={isMobile ? "30" : null}
            >
            <Image
              src={Two}
              width={100}
              align="center"
            />
            <Text
              width={isMobile ? 50 : 100}
              font={{size:isMobile ? 1.2 : isSmallScreen ? 2 : 2.6, weight: FontWeight.Bold}}
              textColor={Colors.white}
              align="center"
              center
            >
              Payez en ligne
            </Text>
            </ResponsiveWrapper>
            <ResponsiveWrapper
              direction="column"
              width={isMobile ? 100 : 30}
            >
            <Image
              src={Three}
              width={100}
              align="center"
            />
            <Text
              width={isMobile ? 50 : 100}
              font={{size:isMobile ? 1.2 : isSmallScreen ? 2 : 2.6, weight: FontWeight.Bold}}
              textColor={Colors.white}
              align="center"
              center
            >
              Parlez au conseiller immédiatement
              via chat audio ou vidéo
            </Text>
            </ResponsiveWrapper>
            

          </ResponsiveWrapper>
        </SectionWrapper>
        </Fragment>
        </ScrollableAnchor>
    )
  }
}

const width = props => {
  if (props.width !== null) {
    return css`
      width: ${props.width}px;
    `;
  } else {
    return null;
  }
}

const widthPercent = props => {
  if (props.widthPercent !== null) {
    return css`
      width: ${props.widthPercent}%;
    `;
  } else {
    return null;
  }
}

const height = props => {
  if (props.height !== null) {
    return css`
      height: ${props.height}px;
    `;
  } else {
    return null;
  }
}

const align = props => {
  if (props.align !== null) {
    return css`
      align-self: ${props.align};
    `;
  } else {
    return null;
  }
}

const marginTop = props => {
  if (props.marginTop !== null) {
    return css`
      margin-top: ${props.marginTop}px;
    `;
  } else {
    return null;
  }
}

const marginBottom = props => {
  if (props.marginBottom !== null) {
    return css`
      margin-bottom: ${props.marginBottom}px;
    `;
  } else {
    return null;
  }
}


const Image = styled("img")`
  ${width};
  ${height};
  ${marginTop};
  ${marginBottom};
  ${widthPercent};
  ${align};
`;

export default HowItWorks;