import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Container, Row, Col, Nav, Card, Button } from '@edx/paragon';

import Header from './components/Header';
import Footer from './components/Footer';
import DashboardApp from './components/DashboardApp';
import SearchApp from './components/SearchApp';

import './App.scss';

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <main id="content">
        <Switch>
          <Route exact path="/" component={DashboardApp} />
          <Route path="/search" component={SearchApp} />
          <Route
            path="/admin"
            render={() => {
              return (
                <Container className="admin-sidebar-navigation">
                  <Row className="vh-100">
                    <Col lg={3} className="border-right py-3">
                      <Nav className="flex-column">
                        <Nav.Link as={NavLink} to="/admin">Home</Nav.Link>
                        <div className="my-2" />
                        <Nav.Link as={NavLink} to="/admin/subscriptions">Subscriptions</Nav.Link>
                        <Nav.Link as={NavLink} to="/admin/insights">Insights &amp; Reporting</Nav.Link>
                        <Nav.Link as={NavLink} to="/admin/settings">Settings</Nav.Link>
                        <div className="my-2" />
                        <Nav.Link as={NavLink} to="/admin/support">Support</Nav.Link>
                      </Nav>
                    </Col>
                    <Col className="py-3">
                      <h2>Welcome, Adam!</h2>
                      <p className="lead">This page may include:</p>
                      <ul>
                        <li>
                          Onboarding steps for new Enterprise Admins
                        </li>
                        <li>
                          Links to helpful resources
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Container>
              );
            }}
          />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
