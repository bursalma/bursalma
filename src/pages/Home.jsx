import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Work from '../components/Work';
import Skill from '../components/Skill';
import Project from '../components/Project';
import Edu from '../components/Edu';
import Cert from '../components/Cert';

class Home extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }

  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("header");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }

  render() {
    return (
      <div>
        <div id='begin' />
        <Header />
        <BodyContainer>
          <Work />
          <Skill />
          <Project />
          <Edu />
          <Cert />
        </BodyContainer>
      </div>
    );
  }
}

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px 25px;
`

export default Home;