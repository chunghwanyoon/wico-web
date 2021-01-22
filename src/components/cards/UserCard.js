import React from 'react';
import styled from 'styled-components';
import unknown from '../../assets/unknown_user.png';

const UserCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #f8f9fa;
  min-width: 8rem;
  min-height: 12.5rem;
  padding: 1.5rem 0 1.5rem;

  div {
    width: 90%;
  }

  div.profile-image {
    text-align: center;
    border-radius: 50%;
    margin-bottom: 2rem;

    &:hover {
      transform: scale(1.2);
      transition: all 0.5s ease 0s;
    }

    & > img {
      width: 80%;
      border-radius: 50%;
      transform: scale(1);
      transition: all 0.9s ease 0s;
    }
  }

  div.descriptions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.25rem;

    & > .nickname {
      padding: 0.25rem;
      font-size: 1rem;
    }
    & > .introduction {
      padding: 0.25rem;
      font-size: 0.75rem;
      color: gray;
    }
  }
`;

const UserCard = ({ nickname, description }) => {
  return (
    <UserCardContainer>
      <div className="profile-image">
        <img src={unknown} alt="" />
      </div>
      <div className="descriptions">
        <h3 className="nickname">{nickname}</h3>
        <p className="introduction">{description}</p>
      </div>
    </UserCardContainer>
  );
};

export default UserCard;
