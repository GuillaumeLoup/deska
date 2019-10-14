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
import ResponsiveWrapper from "../../ui/ResponsiveWrapper";
import Text from "../../ui/Text";
import Button from "../../ui/Buttons";

// Assets ------------------------------------------
import family from "../../../assets/family.jpg";
import herit from "../../../assets/herit.jpg";
import contrat from "../../../assets/contrat.jpg";

class Questions extends Component {
  render() {
    const {isMobile, isSmallScreen } = this.props;
    return(
         <ScrollableAnchor id="accueil">
      <Fragment>
       <SectionWrapper
          minHeight={isMobile ? 50 : isSmallScreen ? 60 : 90}
          direction="column"
          align="center"
          backgroundColor="#e6e6e6"
          
        >
          <Title
            font={{ weight: FontWeight.Bold, size: isMobile ? 2.8 : isSmallScreen ? 3 : 4}}
            textColor={Colors.black}
            marginTop={30}
            center
            padding={8}
          >
             Consultez les questions les plus fréquentes
            </Title>
           <ResponsiveWrapper
            width={isSmallScreen ? 100 : 75}
            heightPercent={100}
            direction={isMobile ? "column" : "row"}
            justify="space-evenly"
            
          >
            <ResponsiveWrapper
              direction="column"
              width={isMobile ? 90 : 30}
              viewportHeight={60}
              backgroundColor="white"
              padding={isMobile ? 8 : 2}
              marginLeft={isMobile ? 5 : null}
              marginBottom={isMobile ? "20" : null}
            >
              <ResponsiveWrapper
                position="relative"
              >
              <Image
                width={100}
                src={family}
              />
              <Text
                position="absolute"
                textColor={Colors.white}
                font={{size:isMobile ? 1.8 : isSmallScreen ? 2 : 2, weight: FontWeight.Bold}}
                top={45}
                left={10}
                width={80}
                center
              >
                Divorce ou séparation

              </Text>
              </ResponsiveWrapper>
              <ResponsiveWrapper
                heightPercent={80}
              >
              <Text
              width={100}
              font={{size:isMobile ? 1.2 : isSmallScreen ? 2 : 1.4, weight: FontWeight.Regular}}
              textColor={Colors.black}
              lineHeight="3"
            >
              Je pense à me séparer, que dois-je faire avant de le faire?<br/>
              Qu'advient-il du logement familial si je veux divorcer?<br/>
              Comment puis-je demander une annulation de mariage?
            </Text>
            </ResponsiveWrapper>
            <ResponsiveWrapper
              justify="center"
            >
            <Button
              maxWidth={30}
              alignSelf="center"
            >
              Sélectionnez
            </Button>
            </ResponsiveWrapper>


            </ResponsiveWrapper>
            <ResponsiveWrapper
              direction="column"
              width={isMobile ? 90 : 30}
              viewportHeight={60}
              backgroundColor="white"
              padding={isMobile ? 8 : 2}
              marginLeft={isMobile ? 5 : null}
              marginBottom={isMobile ? "20" : null}
            >
              <ResponsiveWrapper
                position="relative"
              >
              <Image
                width={100}
                src={herit}
              />
              <Text
                position="absolute"
                textColor={Colors.white}
                font={{size:isMobile ? 1.2 : isSmallScreen ? 2 : 2, weight: FontWeight.Bold}}
                top={45}
                left={10}
                width={80}
                center
              >
                Testaments, héritage et fiscalité

              </Text>
              </ResponsiveWrapper>
              <ResponsiveWrapper
                heightPercent={80}
              >
              <Text
              width={100}
              font={{size:isMobile ? 1.2 : isSmallScreen ? 2 : 1.4, weight: FontWeight.Regular}}
              textColor={Colors.black}
              lineHeight="3"
            >
              Quelles taxes doivent payer les héritiers?<br/>
              Quel est le légitime et quel droit ai-je sur un héritage?<br/>
              Comment savoir si un testament a été fait et s'il est correct?
            </Text>
            </ResponsiveWrapper>
            <ResponsiveWrapper
              justify="center"
            >
            <Button
              maxWidth={30}
              alignSelf="center"
            >
              Sélectionnez
            </Button>
            </ResponsiveWrapper>


            </ResponsiveWrapper>
            <ResponsiveWrapper
              direction="column"
              width={isMobile ? 90 : 30}
              viewportHeight={60}
              backgroundColor="white"
              padding={isMobile ? 8 : 2}
              marginLeft={isMobile ? 5 : null}
              marginBottom={isMobile ? "20" : null}
            >
              <ResponsiveWrapper
                position="relative"
              >
              <Image
                width={100}
                src={contrat}
              />
              <Text
                position="absolute"
                textColor={Colors.white}
                font={{size:isMobile ? 1.2 : isSmallScreen ? 2 : 2, weight: FontWeight.Bold}}
                top={45}
                left={10}
                width={80}
                center
              >
                
                Garde d'enfant

              </Text>
              </ResponsiveWrapper>
              <ResponsiveWrapper
                heightPercent={80}
              >
              <Text
              width={100}
              font={{size:isMobile ? 1.2 : isSmallScreen ? 2 : 1.4, weight: FontWeight.Regular}}
              textColor={Colors.black}
              lineHeight="3"
            >
             
              Quels critères sont suivis pour la garde conjointe?<br/>
              Pouvez-vous m'empêcher de voir mes enfants pendant le processus judiciaire?<br/>
              Que se passe-t-il si la pension alimentaire n'est pas versée aux enfants?
            </Text>
            </ResponsiveWrapper>
            <ResponsiveWrapper
              justify="center"
            >
            <Button
              maxWidth={30}
              alignSelf="center"
            >
              Sélectionnez
            </Button>
            </ResponsiveWrapper>


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
      width: ${props.width}%;
    `;
  } else {
    return null;
  }
}

const padding = props => {
  if (props.padding !== null) {
    return css`
      padding: ${props.padding}%;
    `;
  } else {
    return null;
  }
}

const position = props => {
  if (props.position !== null) {
    return css`
      position: ${props.position};
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
  ${padding};
  ${position};
`;

export default Questions;