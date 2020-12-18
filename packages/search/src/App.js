import React from 'react';
import { Router } from 'react-router-dom';
import { Container, Row, Col, Pagination, SearchField, Dropdown } from '@edx/paragon';

import MarketingCourseCard from './components/MarketingCourseCard';

import './App.scss';

export default ({ history }) => {
  return (
    <Router history={history}>
      <div className="bg-primary text-white pt-4 pb-5">
        <Container>
          <Row>
            <Col md={12} lg={8}>
              <label id="search-input-box" className="mb-2 text-brand-primary font-weight-normal">
                Search Courses
              </label>
              <SearchField.Advanced
                className="border-0 bg-white"
                onSubmit={() => {}}
                onClear={() => {}}
              >
                <SearchField.Input className="form-control-lg" aria-labelledby="search-input-box" />
                <SearchField.ClearButton />
                <SearchField.SubmitButton />
              </SearchField.Advanced>
            </Col>
          </Row>
          <div>
            <Dropdown>

            </Dropdown>
          </div>
        </Container>
      </div>
      <Container className="py-4">

        <Row>
          <Col>
            <h1>Search</h1>
            <span className="lead">812 results</span>
          </Col>
          <Col className="d-flex justify-content-end">
            <Pagination pageCount={2} onPageSelect={() => {}} paginationLabel="TODO" />
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
