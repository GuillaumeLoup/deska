import React, { Component, Fragment } from "react";
import Select from 'react-select';




// Constants ---------------------------------------
import * as Colors from "../../../constants/Colors";
import * as FontWeight from "../../../constants/Fonts";
import Conseillers from "../../../constants/Conseillers";

// UI components -----------------------------------
import SectionWrapper from "../../ui/Section";
import Title from "../../ui/Title";
import ResponsiveWrapper from "../../ui/ResponsiveWrapper";
import Button from "../../ui/Buttons";

class AllAdvisors extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedOption: '',
    }
  }

 handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }

  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
    const { isMobile, isSmallScreen } = this.props;
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
             Nos conseillers
            </Title>
            <ResponsiveWrapper
              pixelWidth={200}
            >
              <Select
                name="form-field-name"
                value={value}
                onChange={this.handleChange}
                options={[
                  { value: 'one', label: 'One' },
                  { value: 'two', label: 'Two' },
                ]}
              />
      </ResponsiveWrapper>
            </SectionWrapper>
            </Fragment>
    )
  }
}

export default AllAdvisors;