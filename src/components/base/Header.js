import React, { useContext, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import logo from '../../assets/wico-default-logo.png';

const HeaderContainer = styled.div`
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  color: white;
  min-height: 3.75rem;

  div.navigation {
    width: 20%;
  }

  div.header-titles {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.25;
    padding: 0.5rem;
    & > .header-title-start {
      position: relative;
      right: 1rem;
      padding: 0.25rem;
    }
    & > .header-title-end {
      position: relative;
      left: 1rem;
      padding: 0.25rem;
    }
  }

  img.logo {
    width: 100%;
    padding-right: 0.25rem;
  }
`;

const Header = withRouter(({ history }) => {
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const [open, setOpen] = useState(true);

  return (
    <HeaderContainer>
      <div className="navigation">
        <img className="logo" src={logo} alt="winteriscoming logo" />
      </div>
      <div className="header-titles">
        <div className="header-title-start">WE ARE 1N1T1ATES</div>
        <div className="header-title-end">W1NTER 1S COM1NG</div>
      </div>
    </HeaderContainer>
  );
});

export default Header;
