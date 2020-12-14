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
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" className="btn-link" exact>Dashboard</Nav.Link>
          <Nav.Link as={NavLink} to="/search" className="btn-link">Find a Course</Nav.Link>
        </Nav>
        <Nav>
          {/* <Nav.Link as={NavLink} to="/admin" className="mr-3">Manage</Nav.Link> */}
          <NavDropdown title="Manage" id="nav-dropdown" className="mr-3">
            <NavDropdown.Item as={NavLink} to="/admin">Home</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/admin/subscriptions">Subscriptions</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/admin/codes">Codes</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/admin/settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to="/admin/support">Support</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="https://edx.org" className="mr-3">Help</Nav.Link>
          <AvatarDropdown />
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
};
