import React, { Component } from 'react';

const description = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
]

export class Experience extends Component {
  render() {
    return (
      <section className="experience">
        <div className="container">
          <h3>Experience</h3>
          <Position name='Frontend Developer' dates='09.2020 - present' company='Extremelab' description={description[0]} />
          <Position name='Senior Graphic Designer' dates='09.2020 - 08.2021' company='ABB' description={description[1]} />
          <Position name='Web Designer' dates='09.2020 - 08.2021' company='Duckie Deck' description={description[2]} />
        </div>
      </section>
    )
  }
}

export class Position extends Component {
  render() {
    return (
      <div className="position">
        <div className="left">
          <span className="dates">{this.props.dates}</span>
          <h4>{this.props.name}</h4>
          <span className="company">{'at ' + this.props.company}</span>
        </div>
        <p className='description'>{this.props.description}</p>
      </div>
    )
  }
}