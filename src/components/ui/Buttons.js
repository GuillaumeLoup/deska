//@flow
import React, {Component} from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/core";

// Constants ---------------------------------------
import * as Colors from "../../constants/Colors";

class Button extends Component {
  _handleClick = (e) => {
    e.preventDefault()
    this.props.handleClick && this.props.handleClick(this.props.value);
  };
  render() {
    return (
      <ButtonStyled
        maxWidth={this.props.maxWidth}
        marginBottom={this.props.marginBottom}
        marginTop={this.props.marginTop}
        alignSelf={this.props.alignSelf}
        onClick={this._handleClick}
        type={this.props.type}
      >
        {this.props.children}
      </ButtonStyled>
    );
  }
}

const maxWidth = props => {
  if (props.maxWidth != null) {
    return css`
      max-width: ${props.maxWidth}%;
    `;
  }
  return null;
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

const alignSelf = props => {
  if (props.alignSelf == null) return null;
  return props.alignSelf
    ? css`
        align-self: ${props.alignSelf};
      `
    : null;
};

const ButtonStyled = styled("button")`
  min-width: 180px;
  min-height: 40px;
  border: 1px solid ${Colors.black};
  padding: 10px 10px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    transform: translateX(10%);
  }
  transition: all 0.2s ease;
  margin-bottom : 0px;
  ${marginTop};
  ${marginBottom};
  ${maxWidth};
  ${alignSelf};
`;

export default Button;
