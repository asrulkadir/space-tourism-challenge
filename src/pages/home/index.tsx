import React from 'react';
import styled from 'styled-components';
import {
  backgroundHomeDesktop,
  backgroundHomeTablet,
  backgroundHomeMobile,
} from '../../assets/Image';
import Layout from '../../components/Layout/Layout';
import TitlePage from '../../components/TitlePage/TitlePage';
import { device } from '../../utils/responsive';

export const Wrapper = styled.div<{ reverse: Boolean }>`
  color: white;
  width: 80%;
  min-height: 90vh;
  margin: auto;
  justify-content: space-between;
  display: flex;

  @media ${device.tablet} {
    flex-direction: ${(props) => (props.reverse ? 'column-reverse' : 'column')};
    min-height: 85vh;
  }

  @media ${device.mobile} {
    flex-direction: ${(props) => (props.reverse ? 'column-reverse' : 'column')};
    min-height: 85vh;
    width: 90%;
  }
`;

const Content = styled.div`
  margin: 7.5rem 0 5%;
  width: 40%;

  @media ${device.tablet} {
    width: 80%;
    margin: auto;
  }

  @media ${device.mobile} {
    width: 90%;
    margin: auto;
  }
`;

const Letter = styled.p`
  font-family: 'Barlow Condensed';
  font-size: 28px;
  letter-spacing: 4.725px;

  @media ${device.tablet} {
    text-align: center;
  }

  @media ${device.mobile} {
    text-align: center;
    font-size: 16px;
  }
`;

const BigLetter = styled.p`
  font-family: 'Bellefair';
  font-size: 150px;

  @media ${device.tablet} {
    text-align: center;
  }

  @media ${device.mobile} {
    text-align: center;
    font-size: 80px;
  }
`;

const Desc = styled.p`
  font-family: 'Barlow';
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;

  @media ${device.tablet} {
    text-align: center;
  }

  @media ${device.mobile} {
    text-align: center;
    font-size: 15px;
  }
`;

const Explore = styled.div`
  margin: 12.5rem 0 5%;
  cursor: pointer;
  background-color: white;
  color: black;
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: 'Bellefair';
    font-size: 32px;
    letter-spacing: 2px;

    @media ${device.mobile} {
      font-size: 20px;
    }
  }

  &:hover {
    box-shadow: 0px 0px 0px 3.5rem rgba(255, 255, 255, 0.1);
    transition: 0.25s ease all;

    @media ${device.mobile} {
      box-shadow: 0px 0px 0px 2rem rgba(255, 255, 255, 0.1);
    }
  }

  @media ${device.tablet} {
    margin: auto;
  }

  @media ${device.mobile} {
    margin: auto;
    width: 10rem;
    height: 10rem;
  }
`;

const Home = () => {
  return (
    <Layout
      img={backgroundHomeDesktop}
      imgTablet={backgroundHomeTablet}
      imgMobile={backgroundHomeMobile}
    >
      <TitlePage title="Home" />
      <Wrapper reverse={false}>
        <Content>
          <Letter>SO, YOU WANT TO TRAVEL TO</Letter>
          <BigLetter>SPACE</BigLetter>
          <Desc>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </Desc>
        </Content>
        <Explore>
          <p>EXPLORE</p>
        </Explore>
      </Wrapper>
    </Layout>
  );
};

export default Home;
