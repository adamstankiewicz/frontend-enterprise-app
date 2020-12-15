import React from 'react';
import { Card } from '@edx/paragon';

import styled from '@emotion/styled'

import './export.scss';

const getSCSSVariable = (name) => {
  const style = getComputedStyle(document.documentElement).getPropertyValue(name);
  
  if (!style) {
    console.warning(`[getSCSSVariable] ${name} does not exist as a computed style.`)
  }
};

const StyledCard = styled(Card)`
  box-shadow: ${getSCSSVariable('--level-1-box-shadow')};
  &:hover {
    box-shadow: ${getSCSSVariable('--level-2-box-shadow')};
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
