import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DataService from '../../api/getData';
import {
  backgroundCrewDesktop,
  backgroundCrewTablet,
  backgroundCrewMobile,
} from '../../assets/Image';
import Layout from '../../components/Layout/Layout';
import Title from '../../components/Title/Title';
import TitlePage from '../../components/TitlePage/TitlePage';
import { DataType } from '../../types/data.type';
import { listData } from '../../utils/data';
import { device } from '../../utils/responsive';
import { Wrapper } from '../home';

const Description = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Role = styled.p`
  font-family: 'Bellefair';
  font-size: 1.8rem;
  line-height: 37px;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.5;
  margin-top: 20vh;

  @media ${device.tablet} {
    margin-top: 5vh;
    text-align: center;
  }

  @media ${device.mobile} {
    margin-top: 0;
    text-align: center;
    font-size: 1.25rem;
  }
`;

const Name = styled.p`
  font-family: 'Bellefair';
  font-size: 56px;
  line-height: 64px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 3vh 0;

  @media ${device.tablet} {
    text-align: center;
  }

  @media ${device.mobile} {
    text-align: center;
    font-size: 1.75rem;
    margin: 0;
  }
`;

const Bio = styled.p`
  font-family: 'Barlow';
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
  width: 72.5%;

  @media ${device.tablet} {
    text-align: center;
    width: auto;
  }

  @media ${device.mobile} {
    text-align: center;
    width: auto;
  }
`;

const Slide = styled.div<{ chosen: Boolean }>`
  width: 1rem;
  height: 1rem;
  background: ${(props) =>
    props.chosen ? 'white' : 'rgba(255, 255, 255, 0.17)'};
  margin-right: 1.5rem;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.chosen ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  }

  @media ${device.tablet} {
    margin-right: 0;
  }

  @media ${device.mobile} {
    margin-right: 0;
  }
`;

const Slider = styled.div`
  display: flex;
  margin-top: 7.5%;

  @media ${device.tablet} {
    justify-content: space-evenly;
    width: 30%;
    margin: 7.5% auto 5%;
  }

  @media ${device.mobile} {
    justify-content: space-evenly;
    width: 50%;
    margin: 7.5% auto 5%;
  }
`;

const ImgDiv = styled.div`
  height: 90vh;
  img {
    height: 100%;

    @media ${device.tablet} {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 60%;
    }

    @media ${device.mobile} {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 60%;
    }
  }

  @media ${device.tablet} {
    height: 60vh;
  }

  @media ${device.mobile} {
    height: 40vh;
    border-bottom: 1px solid #383b4b;
    margin-top: 2rem;
  }
`;

const Crew = () => {
  const [data, setData] = useState<DataType>(listData);
  const [idCrew, setIdCrew] = useState<number>(0);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  const handleSizeChange = () => {
    setWidth(window.innerWidth);
  };

  function handleTouchStart(e: any) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e: any) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 50) {
      // do your stuff here for left swipe
      moveSliderRight();
    }

    if (touchStart - touchEnd < -50) {
      // do your stuff here for right swipe
      moveSliderLeft();
    }
  }

  const moveSliderLeft = () => {
    if (idCrew > 0) {
      setIdCrew(idCrew - 1);
    }
  };

  const moveSliderRight = () => {
    if (idCrew < data.crew.length - 1) {
      setIdCrew(idCrew + 1);
    }
  };

  useEffect(() => {
    DataService(setData);
    window.addEventListener('resize', handleSizeChange);
  }, []);

  return (
    <Layout
      img={backgroundCrewDesktop}
      imgTablet={backgroundCrewTablet}
      imgMobile={backgroundCrewMobile}
    >
      <TitlePage title="Crew" />
      <Title no="02" title="Meet your crew" />
      <Wrapper reverse={width < 768 ? true : false}>
        <Description
          onTouchEnd={() => handleTouchEnd()}
          onTouchMove={(e) => handleTouchMove(e)}
          onTouchStart={(e) => handleTouchStart(e)}
        >
          {data.crew.map((li, index) => {
            if (idCrew === index) {
              return (
                <div key={index}>
                  <Role>{li.role}</Role>
                  <Name>{li.name}</Name>
                  <Bio>{li.bio}</Bio>
                </div>
              );
            }
            return null;
          })}
          <Slider>
            {data.crew.map((li, index) => {
              return (
                <Slide
                  chosen={idCrew === index ? true : false}
                  key={index}
                  onClick={() => setIdCrew(index)}
                ></Slide>
              );
            })}
          </Slider>
        </Description>
        <ImgDiv
          onTouchEnd={() => handleTouchEnd()}
          onTouchMove={(e) => handleTouchMove(e)}
          onTouchStart={(e) => handleTouchStart(e)}
        >
          {data.crew.map((li, index) => {
            return idCrew === index ? (
              <img key={index} src={li.images.webp} alt="" />
            ) : null;
          })}
        </ImgDiv>
      </Wrapper>
    </Layout>
  );
};

export default Crew;
