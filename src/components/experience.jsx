import React, { Component } from 'react';

const experience = [
  {
    id: 1,
    position: 'Junior Graphic Designer',
    company: 'Mimi Group',
    dates: '04.2010 - 01.2011',
    description: 'Description'
  },
  {
    id: 2,
    position: 'Junior Graphic Designer',
    company: 'Smart Studio',
    dates: '08.2011 - 09.2012',
    description: 'Description'
  },
  {
    id: 3,
    position: 'Graphic Designer / Illustrator',
    company: 'TreDo',
    dates: '09.2012 - 08.2013',
    description: 'Description'
  },
  {
    id: 4,
    position: 'Graphic Designer',
    company: 'Duckie Deck',
    dates: '09.2013 - 01.2014',
    description: 'Description'
  },
  {
    id: 5,
    position: 'UI Designer',
    company: 'Prophone',
    dates: '04.2010 - 01.2011',
    description: 'Description'
  },
  {
    id: 6,
    position: 'Senior Graphic Designer',
    company: 'ABB',
    dates: '04.2014 - 04.2016',
    description: 'Description'
  },
  {
    id: 7,
    position: 'Graphic Designer',
    company: 'Aliso',
    dates: '10.2016 - 02.2017',
    description: 'Description'
  },
  {
    id: 8,
    position: 'Frontend Developer',
    company: 'Extremelab',
    dates: '09.2020 - present',
    description: 'Description'
  }
];


export class Experience extends Component {
  render() {

    const PositionsList = ({ experience }) => (
      <div>
        {experience.map(element => (
          <Position key={element.id} position={element.position} dates={element.dates} company={element.company} description={element.description} />
        ))}
      </div>
    );
    return (
      <section className="experience">
        <div className="container">
          <h3>Experience</h3>
          <PositionsList experience={experience} />
        </div>
      </section>
    )
  }
}

export class Position extends Component {
  render() {
    return (
      <div className='position'>
        <div className="left">
          <span className='dates'>{this.props.dates}</span>
          <h4>{this.props.position}</h4>
          <span className='company'>{'at ' + this.props.company}</span>
        </div>
        <p className='description'>{this.props.description}</p>
      </div>
    )
  }
}