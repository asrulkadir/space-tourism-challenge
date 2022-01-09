import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import { device } from '../../utils/responsive';

interface ImgDevices {
  img: string;
  imgTablet: string;
  imgMobile: string;
}

const Container = styled.div<ImgDevices>`
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    background-image: url(${(props) => props.imgTablet});
  }

  @media ${device.laptop} {
    background-image: url(${(props) => props.img});
  }

  @media ${device.mobile} {
    background-image: url(${(props) => props.imgMobile});
  }
`;

const Content = styled.div`
  flex: 1;
`;

interface Props {
  children: any;
  img: string;
  imgTablet: string;
  imgMobile: string;
}

const Layout = ({ children, img, imgTablet, imgMobile }: Props) => {
  return (
    <Container img={img} imgTablet={imgTablet} imgMobile={imgMobile}>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
