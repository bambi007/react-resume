import React, { Component } from 'react';
import { Header } from './header';
import { Skills } from './skills';
import { Experience } from './experience';


export class Paper extends Component {
  render() {
    return (
      <div className="paper">
        <Header />
        <Skills />
        <Experience />
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