import React, { Component } from 'react';

const technicalSkills = [
  {
    id: 1,
    skill: 'English C1',
  },
  {
    id: 2,
    skill: 'Adobe Photoshop',
  },
  {
    id: 3,
    skill: 'Adobe Illustrator',
  },
  {
    id: 4,
    skill: 'Graphic Design',
  },
  {
    id: 5,
    skill: 'Scrum',
  },
  {
    id: 6,
    skill: 'SEO',
  },
  {
    id: 7,
    skill: 'Problem Solving',
  },
  {
    id: 8,
    skill: 'Time Management',
  }
  ,
  {
    id: 9,
    skill: 'Teamwork',
  },
  {
    id: 10,
    skill: 'Creativity',
  },
  {
    id: 11,
    skill: 'Trello',
  }
]

export class GeneralSkills extends Component {

  render() {

    const SkillSet = ({ skills }) => (
      <div className='general-skill-list'>
        {technicalSkills.map(element => (
          <Skill key={element.id} skill={element.skill} />
        ))}
      </div>
    );

    return (
      <section className="general-skills">
        <h3>General Skills</h3>
        <SkillSet technicalSkills={technicalSkills} />
      </section>
    )
  }
}

export class Skill extends Component {
  render() {
    return (
      <span>{this.props.skill}</span>
    )
  }
}
