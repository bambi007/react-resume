import React, { Component } from 'react';

const skills = [
  {
    id: 1,
    skill: 'HTML',
    level: 92,
  },
  {
    id: 2,
    skill: 'CSS',
    level: 88,
  },
  {
    id: 3,
    skill: 'JavaScript',
    level: 34,
  },
  {
    id: 4,
    skill: 'ReactJS',
    level: 28,
  },
  {
    id: 5,
    skill: 'Web Design',
    level: 100,
  }
]

export class Skills extends Component {

  render() {

    const SkillSet = ({ skills }) => (
      <div className='skill-list'>
        {skills.map(element => (
          <Skill key={element.id} skill={element.skill} level={element.level} />
        ))}
      </div>
    );

    return (
      <section className="skills">
        <div className="container">
          <h3>My Skills</h3>
          <SkillSet skills={skills} />
        </div>
      </section>
    )
  }
}

export class Skill extends Component {
  render() {
    return (
      <div className="skill">
        <div className="data">
          <span>{this.props.skill}</span>
          <span className="percent">{this.props.level + "%"}</span>
        </div>
        <ProgressBar level={this.props.level} />
      </div>
    )
  }
}

export class ProgressBar extends Component {
  render() {
    return (
      <div className="progress-bar">
        <div className="progress-value" style={{ width: `${this.props.level + "%"}` }}></div>
      </div>

    )
  }
}