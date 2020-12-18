import React from 'react';
import { Router } from 'react-router-dom';
import { Container, Row, Col } from '@edx/paragon';

import './App.scss';

export default ({ history }) => {
  return (
    <Router history={history}>
      <Container>
        <Row>
          <Col>
            <h3>Cohorts</h3>
            <p>
              Invite your learners to access your course catalog and manage your subscription cohorts.
            </p>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};
