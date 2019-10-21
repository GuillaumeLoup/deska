import React, { Component, Fragment } from "react";
import { NavLink } from 'react-router-dom';
import '../conseillers/advisor.css';
// Constants ---------------------------------------
import * as FontWeight from "../../../constants/Fonts";

// UI components -----------------------------------
import Title from "../../ui/Title";
import ResponsiveWrapper from "../../ui/ResponsiveWrapper";
import Text from "../../ui/Text";

class OneAdvisor extends Component {
  render() {
    const { isMobile, isSmallScreen, card} = this.props;
    return(
      <Fragment>
        <ResponsiveWrapper
          minHeight={isMobile ? 60 : isSmallScreen ? 40 : 40}
          width={100}
          direction="column"
          align="center"
          marginRight={8}
        >
          
          <NavLink className="navlink" card={card} to={`/advisor/${card.id}`}>
              <div
                className="wrap-card"
              >
                  
                  <Title
                    font={{ weight: FontWeight.Bold, size: isMobile ? 2.8 : isSmallScreen ? 3 : 2}}
                    width={100}
                    marginBottom="30"
                  >
                    {card.name}
                  </Title>
                  <img 
                    src={card.img} alt={card.name} 
                    style={{width: "80px", height: "70px", marginBottom : "30px", textAlign : "center", borderRadius: "50%"}}
                  />
                  <img src={card.note} alt="note" style={{width: "40%"}}/>
                  <Text
                    font={{ weight: FontWeight.Regular, size: isMobile ? 2.8 : isSmallScreen ? 3 : 2}}
                  >
                    {card.fonction}
                  </Text>
                  <Text
                    font={{ weight: FontWeight.Regular, size: isMobile ? 2.8 : isSmallScreen ? 3 : 1.6}}
                  >
                    {card.consult}
                  </Text>
                </div>
                </NavLink>
        </ResponsiveWrapper>
      </Fragment>
    )
  }
}

export default OneAdvisor;