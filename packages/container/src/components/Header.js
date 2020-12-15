import React from 'react';
import { Navbar, Nav, NavDropdown } from '@edx/paragon';
import { NavLink, Link } from 'react-router-dom';
import edXLogo from '@edx/brand/logo.svg';

import AvatarDropdown from './AvatarDropdown';

export default () => {
  return (
    <Navbar variant="light" expand="lg" className="border-bottom">
      <Navbar.Brand as={Link} to="/">
        <img src={edXLogo} alt="edX logo" style={{ maxHeight: 45 }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-link-border-bottom mr-auto">
          <Nav.Link as={NavLink} to="/" className="btn-link" exact>Dashboard</Nav.Link>
          <Nav.Link as={NavLink} to="/search" className="btn-link">Find a Course</Nav.Link>
        </Nav>
        <Nav className="nav-link-border-bottom">
          <Nav.Link as={NavLink} to="/admin" className="mr-3">Manage</Nav.Link>
          <Nav.Link href="https://edx.org" className="mr-3">Help</Nav.Link>
          <AvatarDropdown />
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
};
