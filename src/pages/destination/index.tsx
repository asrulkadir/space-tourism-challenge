import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DataService from '../../api/getData';
import {
  backgroundDestinationDesktop,
  backgroundDestinationMobile,
  backgroundDestinationTablet,
} from '../../assets/Image';
import Layout from '../../components/Layout/Layout';
import Title from '../../components/Title/Title';
import TitlePage from '../../components/TitlePage/TitlePage';
import { DataType } from '../../types/data.type';
import { listData } from '../../utils/data';
import { device } from '../../utils/responsive';
import { Wrapper } from '../home';

const ImgDiv = styled.div`
  margin: 1rem 0;
  img {
    margin: 4rem 0 0 2rem;

    @media ${device.tablet} {
      margin: 4rem auto 1rem;
    }

    @media ${device.mobile} {
      margin: 3rem auto 0;
      display: block;
      width: 60%;
    }
  }

  @media ${device.tablet} {
    margin: auto;
  }

  @media ${device.mobile} {
    margin: auto;
  }
`;

const ContentDiv = styled.div`
  width: 40%;
  margin: 6rem 0 5vh;

  @media ${device.tablet} {
    width: 80%;
    margin: 3rem auto 5vh;
  }

  @media ${device.mobile} {
    width: 90%;
    margin: 2rem auto 5vh;
  }
`;

const PlanetName = styled.div`
  display: flex;

  @media ${device.tablet} {
    justify-content: space-evenly;
    width: 80%;
    margin: auto;
  }

  @media ${device.mobile} {
    justify-content: space-evenly;
    width: 90%;
    margin: auto;
  }
`;

const NameDiv = styled.div<{ chosen: Boolean }>`
  margin-right: 1.5rem;
  cursor: pointer;
  border-bottom: ${(props) => (props.chosen ? '2px solid white' : 'none')};
  height: 2rem;

  &:hover {
    border-bottom: ${(props) =>
      props.chosen ? '2px solid white' : '2px solid rgba(255, 255, 255, 0.5)'};
    height: 2rem;
  }

  @media ${device.tablet} {
    margin-right: 0;
  }

  @media ${device.mobile} {
    margin-right: 0;
  }
`;

const Name = styled.p`
  font-family: 'Barlow Condensed';
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  color: #d0d6f9;
`;

const DesciptionDiv = styled.div`
  margin-top: 1.5rem;
`;

const Line = styled.div`
  height: 1px;
  background: #383b4b;
  margin-top: 3rem;
`;

const Description = styled.p`
  font-family: 'Barlow';
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 32px;
  color: #d0d6f9;

  @media ${device.tablet} {
    text-align: center;
  }

  @media ${device.mobile} {
    text-align: center;
  }
`;

const TitleJourney = styled.p`
  font-family: 'Barlow Condensed';
  line-height: 17px;
  letter-spacing: 2.3625px;
  text-transform: uppercase;
  color: #d0d6f9;
  margin: 1.25rem 0;

  @media ${device.mobile} {
    text-align: center;
  }
`;

const InfoJourney = styled.p`
  font-family: 'Bellefair';
  font-size: 1.75rem;
  line-height: 32px;
  text-transform: uppercase;

  @media ${device.mobile} {
    text-align: center;
  }
`;

const Journey = styled.div`
  display: flex;

  div {
    margin-right: 3rem;

    @media ${device.tablet} {
      margin-right: 0;
    }

    @media ${device.mobile} {
      margin-right: 0;
    }
  }

  @media ${device.tablet} {
    justify-content: space-evenly;
  }

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const TitlePlanet = styled.p`
  font-family: 'Bellefair';
  font-size: 4.75rem;

  @media ${device.tablet} {
    text-align: center;
  }

  @media ${device.mobile} {
    text-align: center;
  }
`;

const Destination = () => {
  const [data, setData] = useState<DataType>(listData);
  const [idPlanet, setIdPlanet] = useState<number>(0);

  useEffect(() => {
    DataService(setData);
  }, []);

  const handleClick = (id: number) => {
    setIdPlanet(id);
  };

  return (
    <Layout
      img={backgroundDestinationDesktop}
      imgMobile={backgroundDestinationMobile}
      imgTablet={backgroundDestinationTablet}
    >
      <TitlePage title="Destination" />
      <Title no="01" title="Pick Your Destination" />
      <Wrapper reverse={false}>
        <ImgDiv>
          {data.destinations.map((li, index) => {
            return idPlanet === index ? (
              <img key={index} src={li.images.png} alt="" />
            ) : null;
          })}
        </ImgDiv>
        <ContentDiv>
          <PlanetName>
            {data.destinations.map((li, index) => {
              return (
                <NameDiv
                  chosen={idPlanet === index ? true : false}
                  key={index}
                  onClick={() => handleClick(index)}
                >
                  <Name>{li.name.toUpperCase()}</Name>
                </NameDiv>
              );
            })}
          </PlanetName>
          <DesciptionDiv>
            {data.destinations.map((li, index) => {
              if (idPlanet === index) {
                return (
                  <div key={index}>
                    <TitlePlanet>{li.name.toUpperCase()}</TitlePlanet>
                    <Description>{li.description}</Description>
                    <Line />
                    <Journey>
                      <div>
                        <TitleJourney>AVG. DISTANCE</TitleJourney>
                        <InfoJourney>{li.distance.toUpperCase()}</InfoJourney>
                      </div>
                      <div>
                        <TitleJourney>EST. TRAVEL TIME</TitleJourney>
                        <InfoJourney>{li.travel.toUpperCase()}</InfoJourney>
                      </div>
                    </Journey>
                  </div>
                );
              }
              return null;
            })}
          </DesciptionDiv>
        </ContentDiv>
      </Wrapper>
    </Layout>
  );
};

export default Destination;
