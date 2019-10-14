import React, { Component, Fragment } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

// Constants ---------------------------------------
import * as Colors from "../../../constants/Colors";
import * as FontWeight from "../../../constants/Fonts";

// UI components -----------------------------------
import SectionWrapper from "../../ui/Section";
import Title from "../../ui/Title";
import Subtitle from "../../ui/Subtitle";
import ResponsiveWrapper from "../../ui/ResponsiveWrapper";
import Text from "../../ui/Text";

class Plans extends Component {
  render() {
    const { isMobile, isSmallScreen } = this.props;
    return(
       <ScrollableAnchor id="accueil">
      <Fragment>
       <SectionWrapper
          minHeight={isMobile ? 60 : 30}
          width={100}
          direction="column"
          align="center"
          backgroundColor="#e6e6e6"
          
        >
          <Title
          width={50}
            font={{ weight: FontWeight.Bold, size: isMobile ? 2.8 : isSmallScreen ? 3 : 4}}
            textColor={Colors.black}
            center
            padding={isMobile ? 8 : isSmallScreen ? 3 : 2}
          >
             Plans
            </Title>
            <ResponsiveWrapper
              width={isMobile ? 100 : isSmallScreen ? 100 : 50}
              direction="column"
            >
            <Subtitle
              font={{ weight: FontWeight.Bold, size: isMobile ? 2 : isSmallScreen ? 2 : 2.2}}
              center
            > 
              Nos plans incluent toutes les fonctionnalités principales et l’accès aux appels audio et vidéo avec nos consultants.
            </Subtitle>
            <ResponsiveWrapper
              marginTop={30}
              direction={isMobile ? "column" : "row"}
              width={100}
              viewportHeight={isMobile ? 50 : 30}
            >
              <ResponsiveWrapper
                position="relative"
                width={isMobile ? 90 : isSmallScreen ? 48 : 48}
                height="150"
                backgroundColor={Colors.white}
                marginRight={isMobile ? null : "10"}
                marginLeft={isMobile ? 5 : null}
                marginBottom={isMobile ? "20" : null}
              >
                <Text
                  position="absolute"
                  textColor={Colors.green}
                  font={{ weight: FontWeight.Black, size: isMobile ? 2.8 : isSmallScreen ? 3 : 3.2}}
                  width={90}
                  paddingLeft={10}
                  top={20}
                  center
                  lineHeight="2.8"
                >
                  2€ / minute
                  </Text>
                  <Text
                    position="absolute"
                    font={{ weight: FontWeight.Regular, size: isMobile ? 1.6 : isSmallScreen ? 1.6 : 1.4}}
                    textColor={Colors.black}
                    marginTop="10"
                    top={40}
                    width={90}
                    paddingLeft={10}
                    center
                  >
                    Contrôlez vos dépenses et ne payez que le temps nécessaire
                  </Text>
                
              </ResponsiveWrapper>
              <ResponsiveWrapper
                position="relative"
                width={isMobile ? 90 : isSmallScreen ? 48 : 48}
                height="150"
                backgroundColor={Colors.white}
                marginLeftPx={isMobile ? null : "10"}
                marginLeft={isMobile ? 5 : null}
              >
                <Text
                  position="absolute"
                  textColor={Colors.green}
                  font={{ weight: FontWeight.Black, size: isMobile ? 2.8 : isSmallScreen ? 3 : 3.2}}
                  width={90}
                  paddingLeft={10}
                  top={20}
                  center
                  lineHeight="2.8"
                >
                  29€ / consultation
                  </Text>
                  <Text
                    position="absolute"
                    font={{ weight: FontWeight.Regular, size: isMobile ? 1.6 : isSmallScreen ? 1.6 : 1.4}}
                    textColor={Colors.black}
                    marginTop="10"
                    top={40}
                    width={90}
                    paddingLeft={10}
                    center
                  >
                    Tarif forfaitaire pour une consultation de 20 minutes
                  </Text>
              </ResponsiveWrapper>

            </ResponsiveWrapper>
            </ResponsiveWrapper>
          </SectionWrapper>
        </Fragment>
      </ScrollableAnchor>

    )
  }
}

export default Plans;