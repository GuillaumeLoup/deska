import React, { Component, Fragment } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

// Constants ---------------------------------------
import * as Colors from "../../../constants/Colors";
import * as FontWeight from "../../../constants/Fonts";

// UI components -----------------------------------
import SectionWrapper from "../../ui/Section";
import Title from "../../ui/Title";
import ResponsiveWrapper from "../../ui/ResponsiveWrapper";
import Text from "../../ui/Text";

// Assets components --------------------------------
import camille from "../../../assets/camille.jpg"
import pierre from "../../../assets/pierre.jpg"
import louis from "../../../assets/louis.jpg"
import note from "../../../assets/note.jpg"


class Advisor extends Component {
  constructor(props){
    super(props);
    this.state={
      getCard : [
  {
    name: 'Camille Durand',
    img: camille,
    note: note,
    fonction: 'droit de la famille',
    consult: "45 Consultations",
    active: false
    
  },
    {
    name: 'Pierre Monant',
    img: pierre,
    note: note,
    fonction: 'droit du travail',
    consult: "54 Consultations",
    active: false
  },
  {
    name: 'Louis Litt',
    img: louis,
    note: note,
    fonction: 'droit informatique',
    consult: "34 Consultations",
    active: true
  }
]
    }
  }
  handleClick = (event) => {
    console.log('test')
    const { active } = this.state;
    this.setState({ active: !active})
  }
  render() {
    const { isMobile, isSmallScreen } = this.props;
    const { active } = this.state;
    console.log(active)
    return(
    <ScrollableAnchor id="accueil">
      <Fragment>
       <SectionWrapper
          minHeight={isMobile ? 60 : 80}
          width={100}
          direction="column"
          align="center"
        >
          <Title
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
              width={40}
              height="300"
            >
             {
              this.state.getCard.map((card, i) =>
               <div onClick={this.handleClick}>
                <ResponsiveWrapper
                  value="active"
                  position="relative"
                  direction="column"
                  width={100}
                  heightPercent={active ? 100 : 80}
                  align="center"
                  borderWidth={1}
                  borderStyle="solid"
                  borderColor={active ? Colors.green : Colors.darkGreyOpacity}
                  marginRight={6}
                  active={card.active}
                  
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
                    style={{width: "40%", marginBottom : "30px"}}
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

                </ResponsiveWrapper>
                </div>
                
              )
            }
            </ResponsiveWrapper>
            

          </SectionWrapper>
        </Fragment>
      </ScrollableAnchor>
    )
  }
}

export default Advisor;