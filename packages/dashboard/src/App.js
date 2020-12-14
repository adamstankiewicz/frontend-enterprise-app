import React from 'react';
import { Container, Row, Col } from '@edx/paragon';
import { Link, BrowserRouter } from 'react-router-dom';

import './App.scss';

export default () => {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col>
            <h1 className="mb-3">My courses</h1>
            <Link to="/search" className="btn btn-primary">Find a course</Link>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
};
