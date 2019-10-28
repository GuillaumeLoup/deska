//@flow
import React, { Component, Fragment } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { configureAnchors } from "react-scrollable-anchor";
import { NavLink } from 'react-router-dom';

// UI components -----------------------------------
import Text from "../../ui/Text";
import Link from "../../ui/Link";
import ResponsiveWrapper from "../../ui/ResponsiveWrapper";
import Underline from "../../ui/Underline";

// Constants ---------------------------------------
import * as Colors from "../../../constants/Colors";

// Assets ------------------------------------------
import * as FontWeight from "../../../constants/Fonts";


configureAnchors({ scrollDuration: 400 });

class Navbar extends Component {
  state = {
    slide: 0,
    lastScrollY: 0,
    windowHeight: 0,
  };

  componentDidMount() {
    this.setState({
      windowHeight: window.innerHeight
    });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <Fragment>
        <NavbarStyled
          width={100}
          minHeight={40}
          align="center"
          position="fixed"
          zIndex={10}
          backgroundColor={Colors.white}
        >
          {" "}
          <ResponsiveWrapper
            width={60}
            justify="space-between"
            align="flex-start"
            paddingLeft={13}
          >
            
              <Text
                font={{size: 4, weight: FontWeight.Bold}} 
                letterSpacing="10"
                bolder
                textColor={Colors.green}
              >
                DESKALIA
              </Text>
            
          </ResponsiveWrapper>
          <ResponsiveWrapper
            width={85}
            justify="space-around"
            align="flex-start"
            paddingRight={13}
          >
            <NavLink to='/#accueil'>
            <Link
              href="#accueil"
              width={20}
              center
              font={{ size: 1.6, weight: FontWeight.Bold}}
              textColor={Colors.black}
              textDecoration="none"
            >
              Accueil
            </Link>
            </NavLink>
            <NavLink to='/#prix'>
             <Link
              href="#prix"
              width={20}
              center
              textColor={Colors.black}
              font={{ size: 1.6, weight: FontWeight.Bold}}
            >
              Plans et prix
            </Link>
            </NavLink>
            <NavLink to='/#contact'>
            <Link
              href="#contact"
              width={20}
              center
              textColor={Colors.black}
              font={{ size: 1.6, weight: FontWeight.Bold}}
            >
              Contact
            </Link>
            </NavLink>
          </ResponsiveWrapper>
          
        </NavbarStyled>
        <Underline
          position="absolute"
            borderBottomWidth={2}
            borderBottomStyle="solid"
            borderBottomColor="#F5F5F5"
            width={100}
            top={7}
          >

          </Underline>
      </Fragment>
    );
  }
}

const position = props => {
  if (props.position != null) {
    return css`
      position: ${props.position};
      transform: translate(0, ${props.slide}px);
      transition: "transform 90ms linear";
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

const width = props => {
  if (props.width != null) {
    return css`
      width: ${props.width}vw;
    `;
  } else {
    return null;
  }
};


const minHeight = props => {
  if (props.minHeight != null) {
    return css`
      min-height: ${props.minHeight}px;
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

const paddingLeft = props => {
  if (props.paddingLeft !== null) {
    return css`
      padding-left: ${props.paddingLeft}%;
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

const backgroundColor = props => {
  if (props.backgroundColor !== null) {
    return css`
      background-color: ${props.backgroundColor};
    `;
  } else {
    return null;
  }
};

const NavbarStyled = styled("nav")`
  ${backgroundColor};
  ${position};
  ${width};
  ${maxWidth};
  ${minHeight};
  display: flex;
  ${direction};
  ${justify};
  ${align};
  ${wrap};
  ${grow};
  ${padding};
  ${paddingLeft};
  ${marginBottom};
  ${zIndex};
  box-shadow: ${props =>
    props.lastScrollY >= window.innerHeight
      ? "0 2px 2px rgba(0,0,0,0.1)"
      : null};
`;

export default Navbar;
