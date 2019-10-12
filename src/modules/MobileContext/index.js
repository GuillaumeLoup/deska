//@flow
import React from "react";

import * as Dimensions from "../../constants/Dimensions";

const isMobile = () => {
  return window.innerWidth <= Dimensions.Breakpoints.mobile;
};

const isSmallScreen = () => {
  return window.innerWidth <= Dimensions.Breakpoints.smallScreen;
};

//$FlowFixMe
const MobileContext = React.createContext({
  isMobile: isMobile(),
  isSmallScreen: isSmallScreen()
});


export class MobileProvider extends React.Component {
  state = {
    isMobile: isMobile(),
    isSmallScreen: isSmallScreen()
  };

  _handleWindowSizeChange = () => {
    this.setState({ isSmallScreen: isSmallScreen() });
    this.setState({ isMobile: isMobile() });
  };

  componentDidMount() {
    window.addEventListener("resize", this._handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._handleWindowSizeChange);
  }

  render() {
    return (
      <MobileContext.Provider value={this.state}>
        {this.props.children}
      </MobileContext.Provider>
    );
  }
}

export function withMobileContext(Component) {
  return function MobileComponent(props) {
    return (
      <MobileContext.Consumer>
        {({ isMobile, isSmallScreen }) => (
          <Component
            {...props}
            isSmallScreen={isSmallScreen}
            isMobile={isMobile}
          />
        )}
      </MobileContext.Consumer>
    );
  };
}

export const MobileConsumer = MobileContext.Consumer;
