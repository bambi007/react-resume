import React, { Component } from 'react';
import Photo from '../assets/images/profile_picture.png'

const socialMedia = [
  {
    id: 1,
    platform: 'github',
    link: 'https://github.com/bambi007'
  },
  {
    id: 2,
    platform: 'linkedin',
    link: 'https://www.linkedin.com/in/sabina-dziedzioch/'
  },
  {
    id: 3,
    platform: 'behance',
    link: 'https://www.behance.net/szaraq'
  }
]



export class ContactInfo extends Component {
  render() {
    return (
      <div className="contact">
        <a href={'tel:+48' + this.props.phone} alt={this.props.phone}><span>phone</span>{this.props.phone}</a>
        <a href={'mailto:' + this.props.email} alt={this.props.email}><span>e-mail</span>{this.props.email}</a>
      </div>
    )
  }
}

export class Contact extends Component {
  render() {

    const SocialMedia = ({ socialMedia }) => (
      <div className='social-media'>
        {socialMedia.map(element => (
          <SocialButton key={element.id} platform={element.platform} link={element.link} />
        ))}
      </div>
    );

    return (
      <div className='contact-links'>
        <SocialMedia socialMedia={socialMedia} />
        <ContactInfo phone='881688818' email='dziedziochs@gmail.com' />
      </div>
    )
  }
}

export class SocialButton extends Component {
  render() {
    return (
      <a href={this.props.link} target="blank" alt={this.props.platform}>
        <button href={this.props.link} className={'social ' + this.props.platform} ></button>
      </a>
    )
  }
}


export class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <h1>{this.props.name}</h1>
        <span>{this.props.title}</span>
        <Contact />
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