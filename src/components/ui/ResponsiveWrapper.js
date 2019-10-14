//@flow
import React from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/core";

const ResponsiveWrapper = (props) => {
  return (
    <StyledResponsiveWrapper
      borderStyle={props.borderStyle}
      borderWidth={props.borderWidth}
      borderColor={props.borderColor}
      position={props.position}
      top={props.top}
      left={props.left}
      right={props.right}
      zIndex={props.zIndex}
      pixelWidth={props.pixelWidth}
      width={props.width}
      maxWidth={props.maxWidth}
      minHeight={props.minHeight}
      height={props.height}
      viewportHeight={props.viewportHeight}
      direction={props.direction}
      justify={props.justify}
      align={props.align}
      alignSelf={props.alignSelf}
      wrap={props.wrap}
      grow={props.grow}
      backgroundColor={props.backgroundColor}
      backgroundImage={props.backgroundImage}
      backgroundPosition={props.backgroundPosition}
      padding={props.padding}
      paddingTop={props.paddingTop}
      paddingLeft={props.paddingLeft}
      paddingRight={props.paddingRight}
      marginAuto={props.marginAuto}
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
      marginRight={props.marginRight}
      marginLeft={props.marginLeft}
      boxShadow={props.boxShadow}
      transform={props.transform}
      overflowX={props.overflowX}
      nowrap={props.nowrap}
      wordWrap={props.wordWrap}
      marginTopPercent={props.marginTopPercent}
      bottom={props.bottom}
      heightPercent={props.heightPercent}
    >
      {props.children}
    </StyledResponsiveWrapper>
  );
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

const borderStyle = props => {
  if (props.borderStyle != null) {
    return css`
      border-style: ${props.borderStyle};
    `;
  } else {
    return null;
  }
};

const borderWidth = props => {
  if (props.borderWidth != null) {
    return css`
      border-width: ${props.borderWidth}px;
    `;
  } else {
    return null;
  }
};

const borderColor = props => {
  if (props.borderColor != null) {
    return css`
      border-color: ${props.borderColor};
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

const bottom = props => {
  if (props.bottom != null) {
    return css`
      bottom: ${props.bottom}%;
    `;
  } else {
    return null;
  }
};

const right = props => {
  if (props.right != null) {
    return css`
      right: ${props.right}%;
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

const align = props => {
  if (props.align != null) {
    return css`
      align-items: ${props.align};
    `;
  } else {
    return null;
  }
};

const alignSelf = props => {
  if (props.alignSelf != null) {
    return css`
      align-self: ${props.alignSelf};
    `;
  } else {
    return null;
  }
};

const wrap = props => {
  if (props.wrap != null) {
    return css`
      flex-wrap: ${props.wrap};
    `;
  } else {
    return null;
  }
};

const grow = props => {
  if (props.wrap != null) {
    return css`
      flex-grow: ${props.grow};
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
  } else {
    return null;
  }
};

const pixelWidth = props => {
  if (props.pixelWidth != null) {
    return css`
      width: ${props.pixelWidth}px;
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
  } else {
    return null;
  }
};

const heightPercent = props => {
  if (props.heightPercent != null) {
    return css`
      height: ${props.heightPercent}%;
    `;
  } else {
    return null;
  }
};

const viewportHeight = props => {
  if (props.viewportHeight != null) {
    return css`
      height: ${props.viewportHeight}vh;
    `;
  } else {
    return null;
  }
};

const height = props => {
  if (props.height != null) {
    return css`
      height: ${props.height}px;
    `;
  } else {
    return null;
  }
};

const minHeight = props => {
  if (props.minHeight != null) {
    return css`
      min-height: ${props.minHeight}%;
    `;
  } else {
    return null;
  }
};

const padding = props => {
  if (props.paddingLeft !== null) {
    return css`
      padding: ${props.padding}%;
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

const paddingLeft = props => {
  if (props.paddingLeft !== null) {
    return css`
      padding-left: ${props.paddingLeft}%;
    `;
  } else {
    return null;
  }
};

const paddingRight = props => {
  if (props.paddingRight !== null) {
    return css`
      padding-right: ${props.paddingRight}%;
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

const backgroundPosition = props => {
  if (props.backgroundPosition !== null) {
    return css`
      background-position: ${props.backgroundPosition};
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

const marginTopPercent = props => {
  if (props.marginTopPercent !== null) {
    return css`
      margin-top: ${props.marginTopPercent}%;
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

const marginRight = props => {
  if (props.marginRight !== null) {
    return css`
      margin-right: ${props.marginRight}px;
    `;
  } else {
    return null;
  }
};

const marginLeft = props => {
  if (props.marginLeft !== null) {
    return css`
      margin-left: ${props.marginLeft}%;
    `;
  } else {
    return null;
  }
};

const marginAuto = props => {
  if (props.marginAuto) {
    return css`
      margin: auto;
    `;
  } else {
    return null;
  }
};

const boxShadow = props => {
  if (props.boxShadow) {
    return css`
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    `;
  } else {
    return null;
  }
};

const transform = props => {
  if (props.transform !== null) {
    return css`
      transform: ${props.transform};
    `;
  } else {
    return null;
  }
};

const overflowX = props => {
  if (props.overflowX !== null) {
    return css`
      overflow-x: ${props.overflowX};
    `;
  } else {
    return null;
  }
};

const nowrap = props => {
  if (props.nowrap !== null) {
    return css`
      white-space: ${props.nowrap};
    `;
  } else {
    return null;
  }
};

const wordWrap = props => {
  if (props.wordWrap) {
    return css`
      word-wrap:break-word;
    `;
  } else {
    return null;
  }
};




const StyledResponsiveWrapper = styled("div")`
  ${position};
  ${borderWidth};
  ${borderColor};
  ${borderStyle};
  ${top};
  ${left};
  ${bottom};
  ${right};
  ${zIndex};
  ${pixelWidth};
  ${width};
  ${maxWidth};
  ${minHeight};
  ${height};
  ${viewportHeight};
  display: flex;
  ${direction};
  ${justify};
  ${align};
  ${alignSelf};
  ${wrap};
  ${grow};
  ${backgroundColor};
  ${backgroundImage};
  ${backgroundPosition};
  ${padding};
  ${paddingTop};
  ${paddingLeft};
  ${paddingRight};
  background-size: cover;
  ${marginAuto};
  ${marginTop};
  ${marginBottom};
  ${marginRight};
  ${boxShadow};
  ${transform};
  ${overflowX};
  ${nowrap};
  ${wordWrap};
  ${marginTopPercent};
  ${heightPercent};
  ${marginLeft};

`;

export default ResponsiveWrapper;
