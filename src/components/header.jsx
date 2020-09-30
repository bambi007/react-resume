import React, { Component } from 'react';
import Photo from '../assets/images/ice.jpg'

export class ContactInfo extends Component {
  render() {
    return (
      <div className="contact">
        <a href={'tel:' + this.props.phone}><span>phone</span>{this.props.phone}</a>
        <a href={'mailto:+48' + this.props.email}><span>e-mail</span>{this.props.email}</a>
      </div>
    )
  }
}

export class SocialMedia extends Component {
  render() {
    return (
      <div className='contact-links'>
        <div className="social-media">
          <a className="social github"></a>
          <a className="social linkedin"></a>
          <a className="social behance"></a>
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
    const image = ['profile picture'];
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