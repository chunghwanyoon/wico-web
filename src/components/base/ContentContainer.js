import React from 'react';
import styled from 'styled-components';

const ContentContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 35rem;
  padding-top: 7.2rem;
  background-color: ${(props) => props.backgroundColor};
`;

const ContentContainer = ({ children, backgroundColor }) => {
  return (
    <ContentContainerBox backgroundColor={backgroundColor}>
      <div className="content-container">{children}</div>
    </ContentContainerBox>
  );
};

export default ContentContainer;
