import React from 'react';
import { Container, Row, Col } from '@edx/paragon';

export default () => {
  return (
    <Container className="py-3 bg-info-100 border-bottom">
      <div className="h-100 position-absolute info-500" width={40}></div>
      <Row>
        <Col>
          <h1 className="h2 m-0">Test Enterprise</h1>
        </Col>
      </Row>
    </Container>
  );
};
