import React from 'react';
import { Card } from '@edx/paragon';

import styled from '@emotion/styled'

import './export.scss';

const getCSSVariable = (name) => {
  return getComputedStyle(document.documentElement).getPropertyValue(name);
};

const StyledCard = styled(Card)`
  box-shadow: ${getCSSVariable('--level-1-box-shadow')};
  &:hover {
    box-shadow: ${getCSSVariable('--level-2-box-shadow')};
  }
  min-height: 160px;
`;

export default () => {
  return (
    <StyledCard className="mb-3">
      <Card.Body>
        <Card.Title>
          edX Demonstration Course
        </Card.Title>
        <Card.Text>edX</Card.Text>
      </Card.Body>
    </StyledCard>
  );
};
