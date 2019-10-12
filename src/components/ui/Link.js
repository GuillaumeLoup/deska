//@flow

import React, { Component } from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { generate_font } from "../../utils/font-generator";

class Link extends Component {
  _handleClick = () => {
    this.props.handleClick && this.props.handleClick();
  };
  render() {
    const {
      position,
      textDecoration,
      top,
      left,
      zIndex,
      textColor,
      center,
      maxWidth,
      width,
      underline,
      letterSpacing,
      font,
      uppercase,
      justify,
      lineHeight,
      marginLeft,
      marginBottom,
      marginRight,
      children,
      href,
      target,
      rel,
      colorInherit,
      display
    } = this.props;
    return (
      <LinkStyled
        href={href}
        target={target}
        rel={rel}
        position={position}
        top={top}
        left={left}
        zIndex={zIndex}
        textColor={textColor}
        isCentered={center}
        maxWidth={maxWidth}
        width={width}
        underline={underline}
        letterSpacing={letterSpacing}
        font={font}
        uppercase={uppercase}
        justify={justify}
        lineHeight={lineHeight}
        marginLeft={marginLeft}
        marginRight={marginRight}
        marginBottom={marginBottom}
        onClick={this._handleClick}
        colorInherit={colorInherit}
        display={display}
        textDecoration={textDecoration}
      >
        {children}
      </LinkStyled>
    );
  }
}

const position = props => {
  if (props.position != null) {
    return css`
      position: ${props.position};
    `;
  } else {
    return null;
  }
};

const textDecoration = props => {
  if (props.textDecoration != null) {
    return css`
      text-decoration: ${props.textDecoration};
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

const display = props => {
  if (props.display != null) {
    return css`
      display: ${props.display};
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

const pointer = props => {
  if (props.onClick !== null) {
    return css`
      cursor: pointer;
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

const width = props => {
  if (props.width != null) {
    return css`
      width: ${props.width}%;
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
  return css`
      text-decoration: none;
    `;
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

const marginLeft = props => {
  const { marginLeft } = props;
  if (marginLeft == null || !marginLeft) return null;

  return marginLeft
    ? css`
        margin-left: ${props.marginLeft}%;
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

const colorInherit = props => {
  const { colorInherit } = props;
  if (colorInherit == null) return null;

  return css`
    color: inherit;
  `;
};

const LinkStyled = styled("a")`
  text-decoration: none;
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
  ${maxWidth};
  ${width};
  ${marginLeft};
  ${marginBottom};
  ${marginRight};
  ${pointer};
  ${colorInherit};
  ${display};
  ${textDecoration};
`;

export default Link;
