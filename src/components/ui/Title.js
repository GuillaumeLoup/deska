//@flow

import React from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { generate_font } from "../../utils/font-generator";

const Title = (props) => {
  return (
    <SectionTitle
      alignSelf={props.alignSelf}
      textColor={props.textColor}
      isCentered={props.center}
      maxWidth={props.maxWidth}
      underline={props.underline}
      letterSpacing={props.letterSpacing}
      font={props.font}
      transform={props.transform}
      justify={props.justify}
      marginBottom={props.marginBottom}
      position={props.position}
      marginTop={props.marginTop}
      left={props.left}
      paddingTop={props.paddingTop}
      padding={props.padding}
      paddingLeft={props.paddingLeft}
      paddingBottom={props.paddingBottom}
      zIndex={props.zIndex}
      wordSpacing={props.wordSpacing}
    >
      {props.children}
    </SectionTitle>
  );
};

const wordSpacing = props => {
  if (props.wordSpacing !== null) {
    return css`
      word-spacing: ${props.wordSpacing}px;
    `;
  } else {
    return null;
  }
};

const zIndex = props => {
  if (props.zIndex !== null) {
    return css`
      z-index: ${props.zIndex};
    `;
  } else {
    return null;
  }
};

const padding = props => {
  if (props.padding !== null) {
    return css`
      padding: ${props.padding}%;
    `;
  } else {
    return null;
  }
};

const marginBottom = props => {
  if (props.marginBottom !== null) {
    return css`
      margin-bottom: ${props.marginBottom}px;
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

const paddingTop = props => {
  if (props.paddingTop !== null) {
    return css`
      padding-top: ${props.paddingTop}%;
    `;
  } else {
    return null;
  }
};

const paddingBottom = props => {
  if (props.paddingBottom !== null) {
    return css`
      padding-bottom: ${props.paddingBottom}%;
    `;
  } else {
    return null;
  }
};

const paddingLeft = props => {
  if (props.paddingLeft !== null) {
    return css`
      padding-left: ${props.paddingLeft}%;
    `;
  } else {
    return null;
  }
};

const maxWidth = props => {
  if (props.maxWidth != null) {
    return css`
      max-width: ${props.maxWidth}%;
    `;
  }
  return null;
};

const left = props => {
  if (props.left != null) {
    return css`
      left: ${props.left}px;
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

const alignSelf = props => {
  const { alignSelf } = props;
  if (alignSelf == null) return null;

  return css`
    align-self: ${props.alignSelf}
  `;
};

const position = props => {
  if (props.position !== null) {
    return css`
      position: ${props.position};
    `;
  } else {
    return null;
  }
};

const SectionTitle = styled("h1")`
  ${center};
  ${textColor};
  ${letterSpacing};
  ${font};
  ${transform};
  ${underline};
  ${justify};
  ${maxWidth};
  ${marginBottom};
  ${marginTop};
  ${alignSelf};
  ${position};
  ${left};
  ${paddingTop};
  ${padding};
  ${paddingLeft};
  ${paddingBottom};
  ${zIndex};
  ${wordSpacing};
`;

export default Title;
