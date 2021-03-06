import React from 'react';
import { Navbar, NavItem, Nav, Image } from 'react-bootstrap';
// import logo from '../../../dist/img/githubfeed_logo.jp2';

const NavigationBar = ({ signOut }) => {
  const userAvatar = window.localStorage.getItem('avatar');
  const username = window.localStorage.getItem('username');
  return (
    <Navbar className="navibar" fixedTop={true}>
      <Nav>
        {/* <NavItem key={1} href="#">
          <Image src={logo} alt="logo" className="logo" />
        </NavItem> */}
        <NavItem eventKey={2} href="https://www.linkedin.com/in/alon-bibring-45117458/" className="brand-navbar">
          <div className="white-text" className="white-text">Made with &#9825; </div>
          <div className="white-text">
            by <i className="name-navbar">Alon Bibring</i> in NYC.
          </div>
        </NavItem>
      </Nav>
      <Nav>
        <NavItem >
          <div className="github-navbar">GithubFeed</div>
          <div className="slogan-navbar">Github updates you care about.</div>
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={3} href="#" className="nav-user-info">
          <div className="nav-username">@{username}</div>
          <button className="nav-signout" onClick={signOut}>{'    '}Sign Out</button>
        </NavItem>
        <NavItem>
          <Image src={userAvatar} className="user-pic"/>
        </NavItem>
      </Nav>
  </Navbar>
  );
}

export default NavigationBar;
