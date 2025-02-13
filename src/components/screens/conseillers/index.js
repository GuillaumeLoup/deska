import React, { Component, Fragment } from "react";
import { NavLink } from 'react-router-dom';
import './advisor.css';
import OneAdvisor from "../oneadvisor";

// Constants ---------------------------------------
import * as Colors from "../../../constants/Colors";
import * as FontWeight from "../../../constants/Fonts";
import Conseillers from "../../../constants/Conseillers";

// UI components -----------------------------------
import SectionWrapper from "../../ui/Section";
import Title from "../../ui/Title";
import ResponsiveWrapper from "../../ui/ResponsiveWrapper";
import Button from "../../ui/Buttons";


class Advisor extends Component {
  
  render() {
    const { isMobile, isSmallScreen } = this.props;
    return(
      <Fragment>
       <SectionWrapper
          minHeight={isMobile ? 60 : isSmallScreen ? 45 : 80}
          width={100}
          direction="column"
          align="center"
        >
          <Title
            paddingBottom={5}
            width={55}
            font={{ weight: FontWeight.Bold, size: isMobile ? 2.8 : isSmallScreen ? 3 : 4}}
            textColor={Colors.black}
            center
            padding={isMobile ? 8 : isSmallScreen ? 3 : 2}
          >
             Nos conseillers
            </Title>
            <ResponsiveWrapper
              direction="row"
              width={isSmallScreen ? 100 : 50}
              heightPercent={isSmallScreen ? 70 : 100}
              marginBottom={isSmallScreen ? null : 60}
              align="center"
              marginLeft={isSmallScreen ? 3 : null}
              
            >
             {
              Conseillers.map((card, i) => <OneAdvisor key={i} card={card}/>)
            }
            
            </ResponsiveWrapper>
            
              <Button
                maxWidth={30}
                alignSelf="center"
                marginTop={isSmallScreen ? "40" : null}
              >
                <NavLink className="navlink-but" to="/advisors">
                Choisissez votre conseiller
                </NavLink>
              </Button>
            
          </SectionWrapper>
        </Fragment>
    )
  }
}

export default Advisor;