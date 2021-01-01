import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Work from '../components/Work';
import Skill from '../components/Skill';
import Project from '../components/Project';
import Edu from '../components/Edu';
import Cert from '../components/Cert';

const Home = () => (
  <HomeContainer>
    <div id='begin' />
    <Header />
    <Work />
    <Skill />
    <Project />
    <Edu />
    <Cert />
  </HomeContainer>
);

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 100px;
`

export default Home;