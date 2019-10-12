//@flow
import React from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { generate_font } from "../../utils/font-generator";

const SubTitle = (props) => {
  return (
    <SectionSubTitle
      textColor={props.textColor}
      isCentered={props.center}
      maxWidth={props.maxWidth}
      underline={props.underline}
      letterSpacing={props.letterSpacing}
      font={props.font}
      transform={props.transform}
      justify={props.justify}
      lineHeight={props.lineHeight}
      marginBottom={props.marginBottom}
      marginTop={props.marginTop}
      padding={props.padding}
      paddingRight={props.paddingRight}
      paddingLeft={props.paddingLeft}
    >
      {props.children}
    </SectionSubTitle>
  );
};

const maxWidth = props => {
  if (props.maxWidth != null) {
    return css`
      max-width: ${props.maxWidth}%;
    `;
  }
  return null;
};

const padding = props => {
  if (props.padding != null) {
    return css`
      padding: ${props.padding}%;
    `;
  }
  return null;
};

const paddingRight = props => {
  if (props.paddingRight != null) {
    return css`
      padding-right: ${props.paddingRight}%;
    `;
  }
  return null;
};

const paddingLeft = props => {
  if (props.paddingLeft != null) {
    return css`
      padding-left: ${props.paddingLeft}%;
    `;
  }
  return null;
};

const lineHeight = props => {
  if (props.lineHeight != null) {
    return css`
      line-height: ${props.lineHeight};
    `;
  }
  return null;
};

const underline = props => {
  if (props.underline != null) {
    return css`
      text-decoration: underline;
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

const center = props => {
  const { isCentered } = props;
  if (isCentered == null || !isCentered) return null;

  return isCentered
    ? css`
        text-align: center;
      `
    : null;
};

const justify = props => {
  const { justify } = props;
  if (justify == null) return null;

  return css`
    text-align: justify;
    text-justify: inter-word;
  `;
};

const marginTop = props => {
  if (props.marginTop == null) return null;
  return props.marginTop
    ? css`
        margin-top: ${props.marginTop}px;
      `
    : null;
};

const marginBottom = props => {
  if (props.marginBottom == null) return null;
  return props.marginBottom
    ? css`
        margin-bottom: ${props.marginBottom}px;
      `
    : null;
};

const SectionSubTitle = styled("h2")`
  ${marginTop};
  ${marginBottom};
  ${center};
  ${textColor};
  ${letterSpacing};
  ${font};
  ${transform};
  ${underline};
  ${justify};
  ${maxWidth};
  ${lineHeight};
  ${padding};
  ${paddingRight};
  ${paddingLeft};
`;

export default SubTitle;
