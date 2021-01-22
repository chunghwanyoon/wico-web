import React from 'react';
import styled, {css} from 'styled-components';
import { COLORS } from '../../domain/colors';

const ContentContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 35rem;
  padding-top: 7.2rem;
  background-color: ${(props) => props.backgroundColor};
  ${({ title }) =>
    title &&
    css`
      padding-top: 5rem;
    `}

  @media (min-width: 768px) {
    min-height: 45rem;

    ${({ title }) =>
    title &&
    css`
      padding-top: 7.2rem;
    `}
  }

  h1.container-title {
    text-align: left;
    padding: 0.5rem;
    font-size: 1.75rem;
    border-bottom: 2px solid ${COLORS.DEFAULT_RED};
    margin-bottom: 2rem;
    @media (min-width: 768px) {
      margin-bottom: 7.2rem;
    }
  }

  div.content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ContentContainer = ({ children, title, backgroundColor }) => {
  return (
    <ContentContainerBox title={title} backgroundColor={backgroundColor}>
      {title ? (
        <h1 className="container-title">{title}</h1>
      ): null}
      <div className="content-container">{children}</div>
    </ContentContainerBox>
  );
};

export default ContentContainer;
