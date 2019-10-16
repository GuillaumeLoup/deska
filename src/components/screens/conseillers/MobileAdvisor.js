import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import styles from 'react-awesome-slider/src/styles';
import OneAdvisor from "../oneadvisor";
import './style.css';
// UI -----------------------------------------
import Title from "../../ui/Title";
import Button from "../../ui/Buttons";

// Font ---------------------------------------
import * as FontWeight from "../../../constants/Fonts";
import Conseillers from "../../../constants/Conseillers";
import ResponsiveWrapper from '../../ui/ResponsiveWrapper';



class MobileAdvisor extends Component {
  render() {
    return(
      <div style={{position: "relative", background: "white", height: "300px"}}>
      <div className="text-wrapper">
        <Title
          paddingTop={8}
          font={{ weight: FontWeight.Black, size: 2.3}}
          center
        >
          Nos Conseillers
        </Title>
      </div>
      
      <AwesomeSlider
        cssModule={styles}
        bullets
        style={{background : "white", top: '50px', height: "100%"}}
        organicArrows
        className="align"
        zIndex={0}
      >
         {
              Conseillers.map((card, i) => <div className="advisor"><OneAdvisor key={i} card={card}/></div>)
            }
       
      </AwesomeSlider>
      <ResponsiveWrapper
        center
        justify="center"
      >
        <Button
          maxWidth={50}
          alignSelf="center"
          marginTop={60}
        >
          <NavLink className="navlink-but" to="/advisors">
            Choisissez votre conseiller
          </NavLink>
        </Button>
        </ResponsiveWrapper>
    </div>
    )
  }
}

export default MobileAdvisor;
