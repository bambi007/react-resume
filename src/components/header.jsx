import React, { Component } from 'react';
import Photo from '../assets/images/ice.jpg'

export class ContactInfo extends Component {
  render() {
    return (
      <div className="contact">
        <a href={'tel:+48' + this.props.phone}><span>phone</span>{this.props.phone}</a>
        <a href={'mailto:' + this.props.email}><span>e-mail</span>{this.props.email}</a>
      </div>
    )
  }
}

export class SocialMedia extends Component {
  render() {
    return (
      <div className='contact-links'>
        <div className="social-media">
          <button href="https://github.com" className="social github"></button>
          <button href="https://github.com" className="social linkedin"></button>
          <button href="https://github.com" className="social behance"></button>
        </div>
        <ContactInfo phone='881688818' email='dziedziochs@gmail.com' />
      </div>
    )
  }
}


export class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <h1>{this.props.name}</h1>
        <span>{this.props.title}</span>
        <SocialMedia />
      </div>
    )
  }
}

export class ProfilePicture extends Component {
  render() {
    return (
      <div className="image"><img src={this.props.source} alt={this.props.alt} /></div>
    )
  }
}

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <Profile name='Sabina Dziedzioch' title="Frontend Developer" />
          <ProfilePicture source={Photo} alt='profile picture' />
        </div>
      </header>
    )
  }
}