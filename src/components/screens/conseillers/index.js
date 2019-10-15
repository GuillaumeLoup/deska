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
  console.log(Conseillers)
    return(
      <Fragment>
       <SectionWrapper
          minHeight={isMobile ? 60 : 80}
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
            padding={isMobile ? 8 : isSmallScreen ? 3 : 2}
          >
             Nos conseillers
            </Title>
            <ResponsiveWrapper
              direction="row"
              width={50}
              heightPercent={100}
              marginBottom={60}
            >
             {
              Conseillers.map((card, i) => <OneAdvisor card={card}/>
              )
            }
            
            </ResponsiveWrapper>
            
              <Button
                maxWidth={30}
                alignSelf="center"
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