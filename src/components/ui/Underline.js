//@flow

import React from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Underline = (props) => {
  return (
    <UnderlineTitle
      width={props.width}
      top={props.top}
      left={props.left}
      borderBottomWidth={props.borderBottomWidth}
      borderBottomStyle={props.borderBottomStyle}
      borderBottomColor={props.borderBottomColor}
      boxShadow={props.boxShadow}
      borderRadius={props.borderRadius}
      position={props.position}
      zIndex={props.zIndex}
      opacity={props.opacity}
    >
      {props.children}
    </UnderlineTitle>
  );
};

 const opacity = props => {
  if (props.opacity!== null) {
    return css`
      opacity: ${props.opacity};
    `;
  } else {
    return null;
  }
};

 const width = props => {
  if (props.width!== null) {
    return css`
      width: ${props.width}%;
    `;
  } else {
    return null;
  }
};

const top = props => {
  if (props.top!== null) {
    return css`
      top: ${props.top}%;
    `;
  } else {
    return null;
  }
};

const zIndex = props => {
  if (props.zIndex!== null) {
    return css`
      z-index: ${props.zIndex};
    `;
  } else {
    return null;
  }
};

const left = props => {
  if (props.left!== null) {
    return css`
      left: ${props.left}%;
    `;
  } else {
    return null;
  }
};

const borderBottomWidth = props => {
  if (props.borderBottomWidth !== null) {
    return css`
      border-bottom-width: ${props.borderBottomWidth}px;
    `;
  } else {
    return null;
  }
};

const borderBottomStyle = props => {
  if (props.borderBottomStyle !== null) {
    return css`
      border-bottom-style: ${props.borderBottomStyle};
    `;
  } else {
    return null;
  }
};

const borderBottomColor = props => {
  if (props.borderBottomColor !== null) {
    return css`
      border-bottom-color: ${props.borderBottomColor};
    `;
  } else {
    return null;
  }
};


const boxShadow = props => {
  if (props.boxShadow !== null) {
    return css`
      box-shadow: ${props.boxShadow};
    `;
  } else {
    return null;
  }
};

const borderRadius = props => {
  if (props.borderRadius !== null) {
    return css`
      border-radius: ${props.borderRadius}px;
    `;
  } else {
    return null;
  }
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

const UnderlineTitle = styled("hr")`
  ${boxShadow};
  ${borderRadius};
  ${borderBottomColor};
  ${borderBottomStyle};
  ${borderBottomWidth};
  ${position};
  ${width};
  ${top};
  ${left};
  ${zIndex};
  ${opacity};
`;

export default Underline;
