//@flow
import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { generate_font } from "../../../utils/font-generator";
// UI components -----------------------------------
import SectionWrapper from "../../ui/Section";
import Text from "../../ui/Text";
import HighlightText from "../../ui/HighlightText";
import ResponsiveWrapper from "../../ui/ResponsiveWrapper";

// Constants ---------------------------------------
import * as Colors from "../../../constants/Colors";
import * as FontWeight from "../../../constants/Fonts";

// Assets ------------------------------------------
import back from "../../../assets/back.jpg";
import backsmall from "../../../assets/backsmall.jpg";


class Home extends Component {
  render() {
    const {isMobile, isSmallScreen } = this.props;
    return(
        <ScrollableAnchor id="accueil">
      <div>
        <SectionWrapper
          minHeight={isMobile ? 50 : isSmallScreen ? 60 : 100}
          direction="column"
          align="center"
          
        >
          <ResponsiveWrapper
          width={100}
            direction="row"
            justify="center"
            marginTop={isMobile || isSmallScreen ? "80" : "80"}
          > {
            isSmallScreen ? 
            <Image
              src={backsmall}
              widthPercent={100}
              height={isMobile ? "350" : null}
            />
            :
            <Image
              src={back}
              widthPercent={100}
              height={isMobile ? "350" : null}
            />
          }
          <ResponsiveWrapper
            backgroundColor={Colors.whiteOpacity}
          >
            
            <Text
              width={isMobile ? 80 : isSmallScreen ? 60 : 40}
              position='absolute'
              top={isMobile ? 30 : isSmallScreen ? 32 : 50}
              font={{size:isMobile ? 1.2 : isSmallScreen ? 2 : 2.6, weight: FontWeight.Bold}}
              center
              
            >
              Ne vous inquiétez pas, Consultation vidéo instantanée 
              avec le conseiller dont vous avez besoin.<br/>
              <HighlightText
                font={{ weight: FontWeight.Light, size: isMobile ? 1: 1.8 }}
                textColor={Colors.darkGrey}
                marginRight="10"
              >
              Tarif plein: 
              </HighlightText>
              29€ / 20min
               <HighlightText
                font={{ weight: FontWeight.Light, size: isMobile ? 1 : 1.8 }}
                textColor={Colors.darkGrey}
                marginLeft="10"
                marginRight="10"
              >
               soit 
              </HighlightText> 
               1,99€ / min <br />
                <HighlightText
                font={{ weight: FontWeight.Light, size: isMobile ? 1 : 1.2 }}
                textColor={Colors.darkGrey}
              >
              (Établissement appelé 2 minutes gratuites) <br/>
              </HighlightText>
              <HighlightText
                font={{ weight: FontWeight.Light, size: isMobile ? 1 : 2 }}
                textColor={Colors.darkGrey}
              >
              Abordable Sans bouger. Sans engagement.
              </HighlightText>
            </Text>
            </ResponsiveWrapper>
           
          </ResponsiveWrapper>
          
        </SectionWrapper>
      </div>
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

const font = props => {
  if (props.font == null) {
    return css`
      font: ${generate_font({})};
    `;
  }

  return css`
    font: ${generate_font(props.font)};
  `;
};
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

const paddingLeft = props => {
  if (props.paddingLeft !== null) {
    return css`
      padding-left: ${props.paddingLeft}%;
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
`;


export default Home;