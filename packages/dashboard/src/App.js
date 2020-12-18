import React from 'react';
import { Link, Router } from 'react-router-dom';
import { Container, Row, Col } from '@edx/paragon';

import './App.scss';

export default ({ history }) => {
  return (
    <Router history={history}>
      <Container className="py-4">
        <Row>
          <Col>
            <h1 className="mb-3">My courses</h1>
            <Link to="/search" className="btn btn-primary">Find a course</Link>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};
