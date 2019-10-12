//@flow

import React, { Component } from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { generate_font } from "../../utils/font-generator";

class Text extends Component {
  render() {
    const {
      height,
      position,
      top,
      left,
      zIndex,
      textColor,
      center,
      width,
      maxWidth,
      underline,
      letterSpacing,
      font,
      uppercase,
      justify,
      lineHeight,
      marginRight,
      marginLeft,
      marginTop,
      marginBottom,
      padding,
      children,
      marginRightPx,
      bolder,
    } = this.props;
    return (
      <TextStyled
        height={height}
        position={position}
        top={top}
        left={left}
        zIndex={zIndex}
        textColor={textColor}
        isCentered={center}
        width={width}
        maxWidth={maxWidth}
        underline={underline}
        letterSpacing={letterSpacing}
        font={font}
        uppercase={uppercase}
        justify={justify}
        lineHeight={lineHeight}
        marginRight={marginRight}
        marginLeft={marginLeft}
        marginTop={marginTop}
        marginBottom={marginBottom}
        padding={padding}
        marginRightPx={marginRightPx}
        bolder={bolder}
        backgroundColor={backgroundColor}
      >
        {children}
      </TextStyled>
    );
  }
}

const backgroundColor = props => {
  if (props.backgroundColor != null) {
    return css`
      background-color: ${props.backgroundColor};
    `;
  } else {
    return null;
  }
};

const height = props => {
  if (props.height != null) {
    return css`
      height: ${props.height};
    `;
  } else {
    return null;
  }
};

const padding = props => {
  if (props.padding != null) {
    return css`
      padding: ${props.padding}%;
    `;
  } else {
    return null;
  }
};

const position = props => {
  if (props.position != null) {
    return css`
      position: ${props.position};
    `;
  } else {
    return null;
  }
};

const top = props => {
  if (props.top != null) {
    return css`
      top: ${props.top}%;
    `;
  } else {
    return null;
  }
};

const left = props => {
  if (props.left != null) {
    return css`
      left: ${props.left}%;
    `;
  } else {
    return null;
  }
};

const zIndex = props => {
  if (props.zIndex != null) {
    return css`
      z-index: ${props.zIndex};
    `;
  } else {
    return null;
  }
};

const width = props => {
  if (props.width != null) {
    return css`
      width: ${props.width}%;
    `;
  }
  return null;
};


const maxWidth = props => {
  if (props.maxWidth != null) {
    return css`
      max-width: ${props.maxWidth}%;
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

const lineHeight = props => {
  if (props.lineHeight != null) {
    return css`
      line-height: ${props.lineHeight}rem !important;
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

const bolder = props => {
  if (props.bolder == null) return null;
  return props.bolder
    ? css`
        font-weight: bold;
      `
    : null;
};

const uppercase = props => {
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

const marginRight = props => {
  const { marginRight } = props;
  if (marginRight == null || !marginRight) return null;

  return marginRight
    ? css`
        margin-right: ${props.marginRight}%;
      `
    : null;
};

const marginRightPx = props => {
  const { marginRightPx} = props;
  if (marginRightPx == null || !marginRightPx) return null;

  return marginRightPx
    ? css`
        margin-right: ${props.marginRightPx};
      `
    : null;
};

const marginLeft = props => {
  const { marginLeft } = props;
  if (marginLeft == null || !marginLeft) return null;

  return marginLeft
    ? css`
        margin-left: ${props.marginLeft}%;
      `
    : null;
};

const marginTop = props => {
  const { marginTop } = props;
  if (marginTop == null || !marginTop) return null;

  return marginTop
    ? css`
        margin-top: ${props.marginTop}px;
      `
    : null;
};

const marginBottom = props => {
  const { marginBottom } = props;
  if (marginBottom == null || !marginBottom) return null;

  return marginBottom
    ? css`
        margin-bottom: ${props.marginBottom}px;
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

const TextStyled = styled("p")`
  ${height};
  ${position};
  ${top};
  ${left};
  ${zIndex};
  ${lineHeight};
  ${center};
  ${textColor};
  ${letterSpacing};
  ${font};
  ${uppercase};
  ${underline};
  ${justify};
  ${width};
  ${maxWidth};
  ${marginTop};
  ${marginLeft};
  ${marginRight};
  ${marginBottom};
  ${padding};
  ${marginRightPx};
  ${bolder};
  ${backgroundColor};
  vertical-align: middle;
`;

export default Text;
