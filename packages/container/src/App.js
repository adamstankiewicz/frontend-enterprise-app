import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Button, Container, Row, Col, Nav, Card } from '@edx/paragon';

import Header from './components/Header';
import Footer from './components/Footer';
import EnterpriseBanner from './components/EnterpriseBanner';
import DashboardApp from './components/DashboardApp';
import SearchApp from './components/SearchApp';

import './App.scss';

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <main id="content" className="bg-light-200">
        <EnterpriseBanner />
        <Switch>
          <Route exact path="/" component={DashboardApp} />
          <Route path="/search" component={SearchApp} />
          <Route
            path="/admin"
            render={() => {
              return (
                <Container className="py-4">
                  <Row>
                    <Col>
                      <h2 className="h1">Manage</h2>
                    </Col>
                  </Row>
                  <Row className="mb-4">
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
                  <Row>
                    <Col>
                      <Card>
                        <Card.Body>
                          <h3>Welcome, Adam!</h3>
                          <p className="lead">Lorem ipsum dolar sit amet</p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed leo mi. Cras eget volutpat
                            turpis, eget sollicitudin quam. Cras dapibus neque a lacus varius, in cursus enim ultrices.
                            Fusce molestie venenatis quam.
                          </p>
                          <Button>Get started</Button>
                        </Card.Body>
                      </Card>
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
