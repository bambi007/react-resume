import React, { Component } from 'react';
import { Header } from './header';
import { TechnicalSkills } from './technical_skills';
import { GeneralSkills } from './general_skills';
import { Experience } from './experience';
import { Consent } from './consent';


export class Paper extends Component {
  render() {
    return (
      <div className="paper">
        <Header />
        <div className="container">

          <Experience />
          <div className="left">
            <TechnicalSkills />
            <GeneralSkills />
          </div>
        </div>
        <Consent />
      </div>
    )
  }
}

export class Bar extends Component {
  render() {
    return (
      <div className="bar">
        <span>
          {(new Date().getFullYear())} © Copyright Sabina Dziedzioch.
        </span>
      </div>
    )
  }
}