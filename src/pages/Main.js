import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ContentContainer from '../components/base/ContentContainer';
import UserSectionContainer from '../components/sections/UserSection';
import { COLORS } from '../domain/colors';

const IntroduceSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;

  h1 {
    padding: 0.25rem;
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: 1px;
    margin: 0 3.2rem 2.4rem 3.2rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.6;

    &.highlight {
      color: ${COLORS.DEFAULT_RED};
      font-weight: 600;
    }
  }
`;

const Main = ({ history }) => {
  return (
    <>
      <ContentContainer backgroundColor="#f8f9fa">
        <IntroduceSectionContainer>
          <h1 className="section-title">
            CS:GO팀 <br /> 여기서 찾으세요
          </h1>
          <p className="highlight">W1CO 같은 팀</p>
          <p>여기서 만들 수 있어요.</p>
          {/* temp */}
          <br />
          <br />
          image goes here
          {/* temp end */}
        </IntroduceSectionContainer>
      </ContentContainer>
      <ContentContainer title="새로 가입한 사람들" backgroundColor="">
          <UserSectionContainer />
      </ContentContainer>
      <ContentContainer>
        <div className="section-groups">{/* components should set here */}</div>
      </ContentContainer>
    </>
  );
};

export default Main;
