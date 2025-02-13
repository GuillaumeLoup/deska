import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Select from 'react-select';
import './alladvisors.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "@emotion/styled";
import { withMobileContext } from "../../../modules/MobileContext";
import GoToRoomInput from "../contact/GoToRoomInput";

// Constants ---------------------------------------
import * as Colors from "../../../constants/Colors";
import * as FontWeight from "../../../constants/Fonts";
import Conseillers from "../../../constants/Conseillers";

// UI components -----------------------------------
import SectionWrapper from "../../ui/Section";
import Title from "../../ui/Title";
import ResponsiveWrapper from "../../ui/ResponsiveWrapper";
import Button from "../../ui/Buttons";
import Text from "../../ui/Text";


class AllAdvisors extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedOption: '',
      selectedOption2: '',
      search: '',
    }
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption} );
  }
 
  handleChangeSecond = (selectedOption2) => {
    this.setState({ selectedOption2});
  }

  render() {
    const options =[
      { value: 'droit du travail', label: 'Droit du travail' },
      { value: 'droit informatique', label: 'Droit informatique' },
      { value: 'droit de la famille', label: 'Droit de la famille' },
      { value: 'accidents de la route', label: 'Accidents de la route' },
      { value: 'administrative', label: 'Administrative' },
      { value: 'adoptions', label: 'Adoptions' },
      { value: 'agraire', label: 'Agraire' },
      { value: 'les locations', label: 'Les locations' },
      { value: 'civile', label: 'Civile' },
      { value: 'les propriétaires de la communauté', label: 'Les propriétaires de la communauté' },
      { value: 'communauté', label: 'Communauté' },
      { value: 'la faillite', label: 'La faillite' },
      { value: 'constitutionnel', label: 'Constitutionnel' },
      { value: 'consommateurs et utilisateurs', label: 'Consommateurs et utilisateurs' },
      { value: 'contentieux Administratif', label: 'Contentieux Administratif' },
    ]
    const options2 = [
      { value: 'français', label: 'français' },
      { value: 'anglais', label: 'Anglais' },
      { value: 'espagnol', label: 'Espagnol' },
      { value: 'italien', label: 'Italien' },
      { value: 'chinois', label: 'Chinois' },
    ]
    const { selectedOption, selectedOption2 } = this.state;
    const { isMobile, isSmallScreen, history } = this.props;
    console.log(selectedOption);
    
    return(
      <Fragment>
       <SectionWrapper
          minHeight={isMobile ? 60 : 80}
          width={100}
          direction="column"
          align="center"
          paddingTop={10}
        >
          <Title
            paddingBottom={5}
            width={50}
            font={{ weight: FontWeight.Bold, size: isMobile ? 2.8 : isSmallScreen ? 3 : 4}}
            textColor={Colors.black}
            center
            padding={isMobile ? 8 : isSmallScreen ? 3 : 2}
          >
             Sélectionnez votre conseiller
            </Title>
            <ResponsiveWrapper
              width={100}
              direction="column"
            >
            <ResponsiveWrapper
              direction={isMobile ? "column" : "row"}
              height="150"
              width={isMobile ? 100 : 75}
              alignSelf="center"
              backgroundColor={Colors.lightGrey}
              justify="center"
              align="center"
            >
            <ResponsiveWrapper
              direction="column"
              width={isMobile ? 90 : 35}
              align="flex-end"
            >
              <Text
                align="flex-start"
                font={{ weight: FontWeight.Regular, size: 1.6}}
              >
                Spécialité:
              </Text>
              
            <ResponsiveWrapper
              width={100}
            >
              
              <Select
                className="select"
                name={this.state.selectedOption}
                isMulti="true"
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
              />
      </ResponsiveWrapper>
      </ResponsiveWrapper>
      <ResponsiveWrapper
        direction="column"
        width={isMobile ? 90 : 35}
        marginTop={isMobile ? 10 : null}
      >
            <Text
              font={{ weight: FontWeight.Regular, size: 1.6}}
            >
                Langues:
              </Text>
              
            <ResponsiveWrapper
              width={100}
            >
              
              <Select
                className="select"
                name={this.state.selectedOption2}
                isMulti="true"
                value={selectedOption2}
                onChange={this.handleChangeSecond}
                options={options2}
              />
      </ResponsiveWrapper>
      </ResponsiveWrapper>
      </ResponsiveWrapper>
     <ResponsiveWrapper
      direction="column"
      width={100}
     >
       {Conseillers.filter(x => { return (!selectedOption2 || selectedOption2.length === 0 || x.langue === selectedOption2[0].value) && (!selectedOption || selectedOption.length === 0 || x.fonction === selectedOption[0].value)} ).map((card, i) => 
       <ResponsiveWrapper
         width={75}
         alignSelf="center"
         borderRadius="4"
         direction={isMobile ? "column" : "row"}
         borderWidth={1}
         borderStyle="solid"
         borderColor="rgb(212, 222, 187, 0.5)"
         marginTop={20}
         padding={1}
         align={isMobile ? "center" : null}
       >
       <ResponsiveWrapper
       direction="column"
        width={isMobile ? 100 : isSmallScreen ? 20 : 10}
        marginBottom={20}
        align={isMobile ? "center" : null}
       >
        <img src={card.img} alt={card.name} style={{width: "100px", height: "100px", borderRadius: "80px"}} />
       </ResponsiveWrapper>
       <ResponsiveWrapper
        width={100}
        direction="column"
        padding={2}
        align={isMobile ? "center" : null}
       >
         <Text
          font={{ weight: FontWeight.Regular, size: 1.6}}
         >
        {card.name}
         </Text>
         <ResponsiveWrapper
         direction="column"
          width={isMobile ? 50 : 20}
         >
         <BorderStyled>
           {card.fonction}
         </BorderStyled>
         </ResponsiveWrapper>
         <Text
          font={{ weight: FontWeight.Regular, size: 1.6}}
          marginTop="10"
         >
           <FontAwesomeIcon
              icon="map-marker-alt"
              color="#d4debb"
              size="md"
            />
            {card.ville}
           </Text>
           <Text
          font={{ weight: FontWeight.Regular, size: 1.6}}
          marginTop="10"
         >
           <FontAwesomeIcon
              icon="calendar-alt"
              color="#d4debb"
              size="md"
            />
            année de collégiature: {card.annee}
           </Text>
         <Text
          font={{ weight: FontWeight.Regular, size: 1.6}}
          marginTop="10"
         >
            <FontAwesomeIcon
              color="#d4debb"
              size="md"
              icon="gavel"
            />
            numéro d'enregistrement: 
           {card.numero}
           </Text>
           <Text
          font={{ weight: FontWeight.Regular, size: 1.6}}
          marginTop="10"
         >
            <FontAwesomeIcon
              color="#d4debb"
              size="md"
              icon="graduation-cap"
            />
           {card.diplome}
           </Text>
       </ResponsiveWrapper>
       <ResponsiveWrapper
        direction="column"
        width={isMobile ? 100 : 20}
        align={isMobile ? "center" : null}
       >
         <Text
            font={{ weight: FontWeight.Regular, size: 1.6}}
         >
          {card.consult}
         </Text>
         
       </ResponsiveWrapper>
       <ResponsiveWrapper
         direction="column"
         width={isMobile ? 100 : 20}
         align={isMobile ? "center" : null}
       >
         <img src={card.note} alt="note" style={{width: "100px", height: "30px"}} />
         <GoToRoomInput history={history} id={card.id} />

       </ResponsiveWrapper>
       </ResponsiveWrapper>
       )}

     </ResponsiveWrapper>
     </ResponsiveWrapper>
            </SectionWrapper>
            </Fragment>
    )
  }
}

const BorderStyled = styled("button")`
  min-width: 120px;
  min-height: 20px;
  padding: 5px 5px;
  border-radius: 20px;
  background-color: #d4debb;
  color: black;
  cursor: text;
  transition: all 0.2s ease;
  margin-bottom : 0px;
  margin-top: 10px;
`;

export default withMobileContext(AllAdvisors);