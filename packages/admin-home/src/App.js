import React from 'react';
import { Router } from 'react-router-dom';
import { Button, Container, Row, Col, Card } from '@edx/paragon';

import './App.scss';

export default ({ history }) => {
  return (
    <Router history={history}>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h3>Welcome, Adam!</h3>
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
    </Router>
  );
};


