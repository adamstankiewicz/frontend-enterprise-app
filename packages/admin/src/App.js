import React from 'react';
import { NavLink, Router, Route } from 'react-router-dom';
import { Container, Row, Col, Nav, } from '@edx/paragon';

import AdminHomeApp from './components/AdminHomeApp';

console.log(AdminHomeApp);

import './App.scss';

export default ({ history }) => {
  return (
    <Router history={history}>
      <Container className="py-4">
        <Row>
          <Col>
            <h2 className="h1">Manage</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav variant="tabs" className="nav-tabs-border-bottom">
              <Nav.Item>
                <Nav.Link as={NavLink} to="/admin" exact>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/admin/subscriptions">
                  Subscriptions
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/admin/codes">
                  Codes
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/admin/insights">
                  Insights &amp; Reporting
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/admin/settings">
                  Settings
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/admin/support">
                  Support
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
      <Route
        path="/admin"
        component={AdminHomeApp}
        exact 
      />
    </Router>
  );
};


