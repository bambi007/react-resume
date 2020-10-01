import React, { Component } from 'react';

export class Consent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ten: "10%",
      twenty: "20%",
    };
  }
  render() {
    return (
      <div className="container">
        <p className="consent">„I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)”</p>
      </div>
    )
  }
}



