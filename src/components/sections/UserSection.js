import React from 'react';
import styled from 'styled-components';
import UserCard from '../cards/UserCard';

const UserSectionContainerBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1.25rem;
  grid-row-gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 5rem;
  }
`;

const UserSectionContainer = () => {
  const users = [
    {
      nickname: 'fana',
      description: 'oyoyoi',
    },
    {
      nickname: 'monge',
      description: 'olala',
    },
    {
      nickname: 'pagong',
      description: 'ololoi',
    },
    {
      nickname: 'kanyuki',
      description: 'master',
    },
    {
      nickname: 'han',
      description: 'ayayai',
    },
    {
      nickname: 'bum',
      description: 'cao ni ma',
    },
  ];

  return (
    <UserSectionContainerBox>
      <UserGrid>
        <UserCard nickname="fana" description="oyoyoi?" />
        <UserCard nickname="La Campanella" description="지싱위 러시비~!" />
        <UserCard nickname="fana" description="oyoyoi?" />
        <UserCard nickname="La Campanella" description="지싱위 러시비~!" />
      </UserGrid>
    </UserSectionContainerBox>
  );
};

export default UserSectionContainer;
