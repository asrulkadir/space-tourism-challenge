import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DataService from '../../api/getData';
import {
  backgroundTechnologyDesktop,
  backgroundTechnologyMobile,
  backgroundTechnologyTablet,
} from '../../assets/Image';
import Layout from '../../components/Layout/Layout';
import Title from '../../components/Title/Title';
import TitlePage from '../../components/TitlePage/TitlePage';
import { DataType } from '../../types/data.type';
import { listData } from '../../utils/data';
import { device } from '../../utils/responsive';
import { Wrapper } from '../home';

const Info = styled.div`
  width: 60%;

  @media ${device.tablet} {
    width: 80%;
    margin: auto;
  }

  @media ${device.mobile} {
    width: 100%;
    margin: auto;
  }
`;

const Num = styled.div<{ chosen: Boolean }>`
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;
  background: ${(props) => (props.chosen ? 'white' : 'none')};
  margin-bottom: 2rem;
  border: ${(props) =>
    props.chosen ? 'none' : '1px solid rgba(255, 255, 255, 0.25)'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    font-family: 'Bellefair';
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 2px;
    color: ${(props) => (props.chosen ? '#0b0d17' : 'white')};
    text-align: center;
  }

  &:hover {
    border: 1px solid white;
  }

  @media ${device.tablet} {
    margin-left: 1rem;
  }

  @media ${device.mobile} {
    margin-left: 0;
  }
`;

const NumDiv = styled.div`
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
  }

  @media ${device.mobile} {
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;
    width: 100%;
    justify-content: space-evenly;
  }
`;

const Name = styled.p`
  font-family: 'Bellefair';
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 64px;
  color: #ffffff;
  text-transform: uppercase;
  margin: 0.5rem 0 1rem;

  @media ${device.tablet} {
    text-align: center;
  }

  @media ${device.mobile} {
    text-align: center;
    font-size: 2rem;
    line-height: 50px;
  }
`;

const DescriptionDiv = styled.div`
  display: flex;
  margin-top: 7.5rem;

  @media ${device.tablet} {
    flex-direction: column;
    margin-top: 0;
  }

  @media ${device.mobile} {
    flex-direction: column;
    margin-top: 0;
    justify-content: center;
    width: 100%;
  }
`;

const Description = styled.div`
  margin-left: 4rem;

  @media ${device.tablet} {
    margin-left: 0;
  }

  @media ${device.mobile} {
    margin-left: 0;
  }
`;

const Desc = styled.p`
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;

  @media ${device.tablet} {
    text-align: center;
  }

  @media ${device.mobile} {
    text-align: center;
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const Terminology = styled.p`
  font-family: 'Barlow Condensed';
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 19px;
  letter-spacing: 2.7px;
  color: #d0d6f9;

  @media ${device.tablet} {
    text-align: center;
  }

  @media ${device.mobile} {
    text-align: center;
  }
`;

const ImgDiv = styled.div`
  margin-right: -9.9vw;
  margin-top: 10vh;
  margin-bottom: 5rem;

  img {
    width: 100%;
    height: 100%;

    @media ${device.mobile} {
      width: 100vw;
      display: block;
    }
  }

  @media ${device.tablet} {
    width: 100vw;
    margin: 7.5vh 0 0 -9.95vw;
  }

  @media ${device.mobile} {
    width: 100vw;
    margin: 7.5vh 0 0 -4.95vw;
  }
`;

const Technology = () => {
  const [data, setData] = useState<DataType>(listData);
  const [idTechnology, setIdTechnology] = useState<number>(0);
  const [width, setWidth] = useState(window.innerWidth);

  const handleSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    DataService(setData);
    window.addEventListener('resize', handleSizeChange);
  }, []);

  return (
    <Layout
      img={backgroundTechnologyDesktop}
      imgMobile={backgroundTechnologyMobile}
      imgTablet={backgroundTechnologyTablet}
    >
      <TitlePage title="Technology" />
      <Title no="03" title="Space launch 101" />
      <Wrapper reverse={true}>
        <Info>
          <DescriptionDiv>
            <NumDiv>
              {data.technology.map((li, index) => {
                return (
                  <Num
                    key={index}
                    chosen={idTechnology === index ? true : false}
                    onClick={() => setIdTechnology(index)}
                  >
                    <p>{index + 1}</p>
                  </Num>
                );
              })}
            </NumDiv>
            <Description>
              <Terminology>THE TERMINOLOGY...</Terminology>
              {data.technology.map((li, index) => {
                if (idTechnology === index) {
                  return (
                    <div key={index}>
                      <Name>{li.name}</Name>
                      <Desc>{li.description}</Desc>
                    </div>
                  );
                }
                return null;
              })}
            </Description>
          </DescriptionDiv>
        </Info>
        <ImgDiv>
          {data.technology.map((li, index) => {
            return idTechnology === index ? (
              <img
                key={index}
                src={width < 1024 ? li.images.landscape : li.images.portrait}
                alt=""
              />
            ) : null;
          })}
        </ImgDiv>
      </Wrapper>
    </Layout>
  );
};

export default Technology;
