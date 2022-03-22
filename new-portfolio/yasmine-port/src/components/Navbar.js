import React from 'react';
import {Scrollchor} from 'react-scrollchor';
import './_Navbar.scss'

class Navbar extends React.PureComponent {
  componentDidMount() {
    this.refs.navbar.addEventListener('click', e => {
      if (e.target.innerText === 'Projects') {
        document
          .getElementById('projects')
          .scrollIntoView({ behavior: 'smooth' });
      } else if (e.target.innerText === 'about-me') {
        document
          .getElementById('about-me')
          .scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  render() {
    return (
      <div className="navbar-container">
        <div className='yinyang-container'>
          <div className='yin-cont'>
        <div class="yinyang"></div>
          </div>
        <nav className="navbar" ref="navbar">
          <Scrollchor className='proj-scroll' to="#about-me">About me</Scrollchor>
          <Scrollchor className='proj-scroll' to="#projects">Projects</Scrollchor>
        </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
