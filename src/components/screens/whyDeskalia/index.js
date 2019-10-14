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
import HighlightText from "../../ui/HighlightText";

class WhyDeskalia extends Component {
  render() {
    const { isMobile, isSmallScreen } = this.props;
    return(
      <ScrollableAnchor id="accueil">
      <Fragment>
       <SectionWrapper
       minHeight={50}
          width={100}
          direction="column"
          align="center"
          
        >
          <Title
          width={50}
            font={{ weight: FontWeight.Bold, size: isMobile ? 2.8 : isSmallScreen ? 3 : 4}}
            textColor={Colors.green}
            center
            padding={isMobile ? 8 : isSmallScreen ? 3 : 2}
          >
             Pourquoi utiliser Deskalia ?
            </Title>
            <ResponsiveWrapper
              direction="column"
              paddingLeft={isMobile || isSmallScreen ? 4 : 25}
              paddingRight={isMobile || isSmallScreen ? 4 : 25}
              center
              marginBottom="30"
            >
              <Text
                font={{ weight: FontWeight.Bold, size: isMobile ? 2 : isSmallScreen ? 1.8 : 1.8}}
                center
              >
                Facile, Abordable, Sans bouger. Sans aucun engagement ni coût caché.

              </Text>
              <Text
                font={{ weight: FontWeight.Regular, size: isMobile ? 1.5 : isSmallScreen ? 1.6 : 1.6}}
                lineHeight="2.6"
                marginTop="20"
                textColor={Colors.grey}
              >
                Chez Deskalia, nous n'avons qu'un seul objectif: vous faciliter la vie en trouvant et en discutant avec le conseiller de votre choix le plus rapidement et le plus facilement possible, à un coût abordable.
              </Text>
              <ResponsiveWrapper
                direction="column"
                paddingLeft={isMobile ? 8 : 4}
              >
              <Text
                font={{ weight: FontWeight.Regular, size: isMobile ? 1.5 : isSmallScreen ? 1.6 : 1.6}}
                marginTop="20"
                textColor={Colors.grey}
              >
                Nous avons
                 <HighlightText
                font={{ weight: FontWeight.Bold, size: isMobile ? 1.5 : 1.8 }}
                textColor={Colors.black}
                marginLeft="5"
              >
                 sélectionné et recommandé des conseillers spécialisés.
                </HighlightText>
              </Text>
              <Text
                font={{ weight: FontWeight.Regular, size: isMobile ? 1.5 : isSmallScreen ? 1.6 : 1.6}}
                marginTop="20"
                textColor={Colors.grey}
              >
                Nous assurons la qualité et la sécurité d'un conseil professionnel et personnalisé où vous choisissez le professionnel le plus approprié.
              </Text>
              <Text
                font={{ weight: FontWeight.Regular, size: isMobile ? 1.5 : isSmallScreen ? 1.6 : 1.6}}
                marginTop="20"
                textColor={Colors.grey}
              >
                 <HighlightText
                font={{ weight: FontWeight.Bold, size: isMobile ? 1.5 : 1.8 }}
                textColor={Colors.black}
                marginRight="5"
              >
                Des réponses plus rapides, il n'y en a pas!
                </HighlightText>
                Ne perdez plus de temps, discutez instantanément avec les conseillers disponibles. Pas de réceptionnistes ou en attente.
              </Text>
              <Text
                font={{ weight: FontWeight.Regular, size: isMobile ? 1.5 : isSmallScreen ? 1.6 : 1.6}}
                marginTop="20"
                textColor={Colors.grey}
              > 
                Économisez du temps et de l'argent en frais: une consultation fixe de 20 mètres. pour 29 euros ou juste payer une minute, ni plus ni moins. Et sans engagement.
              </Text>
              </ResponsiveWrapper>
            </ResponsiveWrapper>
          </SectionWrapper>
        </Fragment>
      </ScrollableAnchor>
    )
  }
}

export default WhyDeskalia;