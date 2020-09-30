import React, { Component } from 'react';



export class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ten: "10%",
      twenty: "20%",
      thirty: "30%",
      fourty: "40%",
      fifty: "50%",
      sixty: "60%",
      seventy: "70%",
      eighty: "80%",
      ninety: "90%",
      hundred: "100%"
    };
  }
  render() {
    return (
      <section className="skills">
        <div className="container">
          <h3>My Skills</h3>
          <div className="skill-list">
            <Skill name='HTML' width={this.state.ninety} />
            <Skill name='CSS' width={this.state.ninety} />
            <Skill name='JavaScript' width={this.state.thirty} />
            <Skill name='ReactJS' width={this.state.twenty} />
            <Skill name='Web Design' width={this.state.hundred} />
          </div>
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
          <span>{this.props.name}</span>
          <span className="percent">{this.props.width}</span>
        </div>
        <ProgressBar width={this.props.width} />
      </div>
    )
  }
}

export class ProgressBar extends Component {
  render() {
    return (
      <div className="progress-bar">
        <div className="progress-value" style={{ width: `${this.props.width}` }}></div>
      </div>

    )
  }
}