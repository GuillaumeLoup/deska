//@flow
import React from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Section = (props) => {
  return (
    <SectionWrapper
      minHeight={props.minHeight}
      justify={props.justify}
      direction={props.direction}
      align={props.align}
      backgroundColor={props.backgroundColor}
      backgroundImage={props.backgroundImage}
      padding={props.padding}
      paddingLeft={props.paddingLeft}
      paddingTop={props.paddingTop}
      position={props.position}
      zIndex={props.zIndex}
      marginTop={props.marginTop}
    >
      {props.children}
    </SectionWrapper>
  );
};

const marginTop = props => {
  if (props.marginTop !== null) {
    return css`
      margin-top: ${props.marginTop}%;
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

const zIndex = props => {
  if (props.zIndex != null) {
    return css`
      z-index: ${props.zIndex};
    `;
  } else {
    return null;
  }
};

const minHeight = props => {
  if (props.minHeight != null) {
    return css`
      min-height: ${props.minHeight}vh;
    `;
  } else {
    return null;
  }
};

const direction = props => {
  if (props.direction === "column") {
    return css`
      flex-direction: column;
    `;
  } else {
    return css`
      flex-direction: row;
    `;
  }
};

const justify = props => {
  if (props.justify != null) {
    return css`
      justify-content: ${props.justify};
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

const paddingLeft = props => {
  if (props.paddingLeft !== null) {
    return css`
      padding-left: ${props.paddingLeft}%;
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

const align = props => {
  if (props.align != null) {
    return css`
      align-items: ${props.align};
    `;
  } else {
    return null;
  }
};

const backgroundColor = props => {
  if (props.backgroundColor !== null) {
    return css`
      background-color: ${props.backgroundColor};
    `;
  } else {
    return null;
  }
};

const backgroundImage = props => {
  if (props.backgroundImage !== null) {
    return css`
      background-image: url(${props.backgroundImage});
    `;
  } else {
    return null;
  }
};

const SectionWrapper = styled("section")`
  width: 100vw;
  ${minHeight}
  display: flex;
  ${position};
  ${direction};
  ${justify};
  ${align};
  ${backgroundColor};
  ${backgroundImage};
  ${padding};
  ${paddingLeft};
  ${paddingTop};
  ${zIndex};
  ${marginTop};
  background-size: cover;
  background-position: center;
`;

export default Section;
