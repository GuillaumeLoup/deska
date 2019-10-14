//@flow
import React from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/core";


const CardAdvisor = (props) => {

  return(
    <CardStyled
      alignSelf={props.alignSelf}
    >
      <ImgWrapper
        backgroundImage={props.src}
      >
        <InfoCard
          
        >

        </InfoCard>
      </ImgWrapper>
    </CardStyled>
  )
}

const backgroundImage = props => {
  if (props.backgroundImage !== null) {
    return css`
      background-image: url(${props.backgroundImage});
    `;
  } else {
    return null;
  }
};

const alignSelf = props => {
  if (props.alignSelf !== null) {
    return css`
      align-self: ${props.alignSelf};
    `;
  } else {
    return null;
  }
};

const marginTop = props => {
  if (props.marginTop !== null) {
    return css`
      margin-top: ${props.marginTop}px;
    `;
  } else {
    return null;
  }
};


const CardStyled = styled('div')`
  position: relative;
  display: flex;
  flex-direction: ${props => props.isSmallScreen ? 'column' : 'row'};
  ${alignSelf};
  width: ${props => props.isSmallScreen ? '100%' : '100%'};
  height: ${props => props.isMobile ? '100%' : props.isSmallScreen ? '100%' : '100%'};
  ${marginTop};
  justify-content: center;
`;

const ImgWrapper = styled("div")`
  position: absolute;
  width: ${props => props.isSmallScreen ? '100%' : '75%'};
  height: ${props =>props.isMobile ? '260px' : props.isSmallScreen ? '450px' : '375px' };
  ${backgroundImage};
  background-size: ${props => props.isSmallScreen ? 'cover': 'cover'};
  background-position: center;
  ${marginTop};
`;

const InfoCard = styled('p')`
position: absolute;
flex-direction: column;

`;
export default CardAdvisor;