//@flow
import React, { Component, Fragment } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { configureAnchors } from "react-scrollable-anchor";
import { goToAnchor } from "react-scrollable-anchor";

// UI components -----------------------------------
import Link from "../../ui/Link";
import Text from "../../ui/Text";
import ResponsiveWrapper from "../../ui/ResponsiveWrapper";
import Underline from "../../ui/Underline";

// Constants ---------------------------------------
import * as Colors from "../../../constants/Colors";

// Assets ------------------------------------------
import * as FontWeight from "../../../constants/Fonts";

configureAnchors({ scrollDuration: 400 });

class NavbarMobile extends Component {
  state = {
    slide: 0,
    lastScrollY: 0,
    windowHeight: 0,
    switchNavbarColors: "white",
    navIsOpen: false,
    goTopisVisible: false
  };

  componentDidMount() {
    this.setState({ windowHeight: window.innerHeight });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY, navIsOpen } = this.state;
    const currentScrollY = window.scrollY;
    // $FlowFixMe


    if (!navIsOpen) {
      if (currentScrollY === 0) {
        this.setState({ slide: 0 });
      } else if (currentScrollY > 40 && currentScrollY < window.innerHeight) {
        this.setState({ slide: -80 });
      } else if (currentScrollY > lastScrollY) {
        this.setState({ slide: -80 });
      } else {
        this.setState({ slide: 0 });
      }
      this.setState({ lastScrollY: currentScrollY });
      this.renderScrollTopButton();
    }
  };

  renderOpened = () => {
    const { switchNavbarColors, navIsOpen } = this.state;
    const { isMobile } = this.props;
    console.log(isMobile)
    return (
      <Fragment>
        <ResponsiveWrapper
          position="absolute"
          top={0}
          left={0}
          direction="column"
          width={100}
          viewportHeight={100}
        >
          <ResponsiveWrapper
            direction="column"
            justify="space-between"
            paddingRight={4}
            pixelWidth={72}
            alignSelf="flex-end"
            marginTop={10}
            zIndex={12}
            marginRight={7}
          >
            <Link
              href="#accueil"
              center
              position="relative"
              font={{ size: 1.8, weight: FontWeight.Bold }}
              handleClick={this.toggleNav}
              top={40}
            >
              Fermer
            </Link>
           
          </ResponsiveWrapper>
          <ResponsiveWrapper
            width={100}
            minHeight={20}
            backgroundColor={Colors.darkGrey}
            direction="column"
            justify="space-evenly"
            align="center"
            zIndex={12}
            
            marginTop="25"
          >
            <Link
              href="#accueil"
              font={{ size: 2}}
              width={50}
              handleClick={this.toggleNav}
              textColor={Colors.white}
              center
            >
              Accueil
            </Link>
            <Link
              href="#price"
              font={{ size: 2}}
              width={50}
              handleClick={this.toggleNav}
              textColor={Colors.white}
              center
            >
              Plans et prix
            </Link>
            <Link
              href="#contact"
              font={{ size: 2}}
              width={50}
              handleClick={this.toggleNav}
              textColor={Colors.white}
              center
            >
              Contact
            </Link>
          </ResponsiveWrapper>
        </ResponsiveWrapper>
        
      </Fragment>
    );
  };

  renderClosed = () => {
    const { switchNavbarColors, navIsOpen } = this.state;
    const { isMobile } = this.props;
    return (
      <Fragment>
        <ResponsiveWrapper
          width={100}
          justify="space-between"
          align="flex-start"
          paddingLeft={4}

        >
          
        </ResponsiveWrapper>
        <ResponsiveWrapper
          direction="column"
          justify="space-around"
          marginRight="20"
        >
          <Link
            /* eslint-disable */
            href="javascript:void(0)"
            width={20}
            center
            font={{ size: 1.8, weight: FontWeight.Bold }}
            position="relative"
            textColor={Colors.black}
            handleClick={this.toggleNav}
          >
            Menu
          </Link>
        </ResponsiveWrapper>
       
      </Fragment>

    );
  };

  toggleNav = () => {
    const { navIsOpen } = this.state;
    this.setState({
      navIsOpen: !navIsOpen
    });
  };

  renderScrollTopButton = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > window.innerHeight) {
      this.setState({
        goTopisVisible: true
      });
    } else {
      this.setState({
        goTopisVisible: false
      });
    }
  };

  scrollTop = () => {
    goToAnchor("accueil", false);
  };

  render() {
    const {
      slide,
      lastScrollY,
      switchNavbarColors,
      navIsOpen,
      goTopisVisible
    } = this.state;

    return (
      <Fragment>
        <NavbarStyled
          width={100}
          minHeight={60}
          align="center"
          backgroundColor={Colors.white}
          position="fixed"
          zIndex={10}
          padding={1}
          slide={slide}
          lastScrollY={lastScrollY}
        >
          <ResponsiveWrapper
            width={60}
            justify="space-between"
            align="flex-start"
            paddingLeft={1}
          >
            
              <Text
                font={{size: 3, weight: FontWeight.Bold}} 
                letterSpacing="6"
                bolder
                textColor={Colors.green}
              >
                DESKALIA
              </Text>
            
          </ResponsiveWrapper>
          {navIsOpen ? this.renderOpened() : this.renderClosed()}
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

export default NavbarMobile;
