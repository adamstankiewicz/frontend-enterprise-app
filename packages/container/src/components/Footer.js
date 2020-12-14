import React from 'react';
import { Container, Row, Col } from '@edx/paragon';
import edXLogo from '@edx/brand/logo-trademark.svg';

export default () => {
  return (
    <footer className="border-top py-4">
      <Container>
        <Row>
          <Col>
            <img src={edXLogo} style={{ maxHeight: 40 }} alt="edX logo" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
