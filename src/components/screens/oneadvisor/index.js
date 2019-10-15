import React, { Component, Fragment } from "react";
import { NavLink } from 'react-router-dom';
import '../conseillers/advisor.css';
// Constants ---------------------------------------
import * as Colors from "../../../constants/Colors";
import * as FontWeight from "../../../constants/Fonts";

// UI components -----------------------------------
import SectionWrapper from "../../ui/Section";
import Title from "../../ui/Title";
import ResponsiveWrapper from "../../ui/ResponsiveWrapper";
import Text from "../../ui/Text";

class OneAdvisor extends Component {
  render() {
    const { isMobile, isSmallScreen, card, click } = this.props;
    return(
      <Fragment>
        <SectionWrapper
          minHeight={isMobile ? 60 : 40}
          width={100}
          direction="column"
          align="center"
        >
          <Title
            paddingBottom={5}
            width={50}
            font={{ weight: FontWeight.Bold, size: isMobile ? 2.8 : isSmallScreen ? 3 : 4}}
            textColor={Colors.black}
            center
            padding={isMobile ? 8 : isSmallScreen ? 3 : 5}
          >
            
          </Title>
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
                  <NavLink className="navlink" card={card} to={`/advisor/${card.id}`}>
                  <button type="button" name={card.name} >afficher le conseiller</button>
                  </NavLink>
                </div>
        </SectionWrapper>
      </Fragment>
    )
  }
}

export default OneAdvisor;