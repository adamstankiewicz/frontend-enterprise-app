import React from 'react';
import { Router } from 'react-router-dom';
import { Container, Row, Col, Pagination } from '@edx/paragon';

import MarketingCourseCard from './components/MarketingCourseCard';

import './App.scss';

export default ({ history }) => {
  return (
    <Router history={history}>
      <Container>
        <Row className="d-flex align-items-center">
          <Col>
            <h1>Search</h1>
          </Col>
          <Col className="d-flex justify-content-end">
            <Pagination pageCount={1} onPageSelect={() => {}} paginationLabel="TODO" />
          </Col>
        </Row>
        <Row className="py-3">
          {[...Array(18)].map((searchResult, index) => (
            <Col key={index} sm={6} md={4} lg={3} className="mb-3">
              <MarketingCourseCard />
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Pagination pageCount={1} onPageSelect={() => {}} paginationLabel="TODO" />
          </Col>
        </Row>
      </Container>
    </Router>
  );
};
