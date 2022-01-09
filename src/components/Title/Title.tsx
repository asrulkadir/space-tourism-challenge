import React from 'react';
import styled from 'styled-components';
import { device } from '../../utils/responsive';

const TitleComponent = styled.p`
  font-family: 'Barlow Condensed';
  font-size: 1rem;
  letter-spacing: 4.725px;
  text-transform: uppercase;
  color: white;
  margin-top: 2rem;
  margin-left: 10%;

  span {
    opacity: 0.25;
  }

  @media ${device.mobile} {
    text-align: center;
    margin-left: 0;
  }
`;

interface Props {
  no: string;
  title: string;
}

const Title = ({ no, title }: Props) => {
  return (
    <TitleComponent>
      <span>{no}</span> {title}
    </TitleComponent>
  );
};

export default Title;
