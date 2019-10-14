//@flow
import React from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { generate_font } from "../../utils/font-generator";

const HighlightText = (props) => {
  return (
    <TextStyled  
      textColor={props.textColor}
      underline={props.underline}
      letterSpacing={props.letterSpacing}
      font={props.font}
      transform={props.transform}
      marginRight={props.marginRight}
      marginLeft={props.marginLeft}
      marginTop={props.marginTop}
    >
      {props.children}
    </TextStyled>
  );
};

const underline = props => {
  if (props.underline != null) {
    return css`
      text-decoration: underline;
    `;
  }
  return null;
};

const marginTop = props => {
  if (props.marginTop != null) {
    return css`
      margin-top: ${props.marginTop}px;
    `;
  }
  return null;
};

const marginRight = props => {
  if (props.marginRight != null) {
    return css`
      margin-right: ${props.marginRight}px;
    `;
  }
  return null;
};

const marginLeft = props => {
  if (props.marginLeft != null) {
    return css`
      margin-left: ${props.marginLeft}px;
    `;
  }
  return null;
};

const textColor = props => {
  if (props.textColor != null) {
    return css`
      color: ${props.textColor};
    `;
  }
  return null;
};

const letterSpacing = props => {
  if (props.letterSpacing != null) {
    return css`
      letter-spacing: ${props.letterSpacing}px;
    `;
  }
  return null;
};

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

const transform = props => {
  if (props.uppercase == null) return null;
  return props.uppercase
    ? css`
        text-transform: uppercase;
      `
    : null;
};



const TextStyled = styled("span")`
  ${textColor};
  ${letterSpacing};
  ${font};
  ${transform};
  ${underline};
  ${marginRight};
  ${marginLeft};
  ${marginTop};
`;

export default HighlightText;
