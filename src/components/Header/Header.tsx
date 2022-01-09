import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Close, Hamburger, Logo } from '../../assets/Icon';
import { device } from '../../utils/responsive';

const HeaderDiv = styled.div`
  color: white;
  display: flex;
  align-items: center;
  width: 100%;
  height: 96px;
  margin-top: 2rem;

  @media ${device.tablet} {
    margin-top: 0;
    justify-content: space-between;
  }

  @media ${device.mobile} {
    margin-top: 0;
    justify-content: space-between;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid white;
  opacity: 0.25;
  width: 35vw;
  margin-left: 4rem;
  position: relative;
  margin-right: -3rem;
  z-index: 2;

  @media ${device.tablet} {
    display: none;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const Nav = styled.nav<{ show: Boolean }>`
  background: rgba(255, 255, 255, 0.04);
  height: 96px;
  width: 65vw;
  backdrop-filter: blur(81.5485px);
  display: flex;
  align-items: center;
  padding-left: 7.5rem;

  @media ${device.tablet} {
    width: 60vw;
    padding-left: 0;
  }

  @media ${device.mobile} {
    position: fixed;
    top: 0;
    right: ${(props) => (props.show ? '0' : '-65vw')};
    height: 100vh;
    padding-left: 0;
    transition: 0.5s ease right;
    z-index: 9;
  }
`;

const LogoDiv = styled.div`
  padding-left: 3rem;

  @media ${device.mobile} {
    position: fixed;
    top: 1.5rem;
    left: 1.5rem;
    padding-left: 0;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  font-family: 'Barlow Condensed';
  align-items: center;
  height: 96px;

  @media ${device.tablet} {
    width: 100%;
    justify-content: space-evenly;
  }

  @media ${device.mobile} {
    width: 100%;
    flex-direction: column;
    height: 75vh;
    align-items: flex-start;
  }
`;

const ItemNav = styled.div<{ params: Boolean }>`
  padding: 2.25rem 2rem;
  cursor: pointer;
  height: 96px;

  div {
    height: 3.75rem;
    border-bottom: ${(props) => (props.params ? '2px solid white' : 'none')};

    b {
      margin-right: 0.5rem;

      @media ${device.tablet} {
        display: none;
      }
    }

    @media ${device.tablet} {
      height: 4rem;
    }

    @media ${device.mobile} {
      height: 2rem;
      border-bottom: unset;
    }
  }

  div:hover {
    border-bottom: ${(props) =>
      props.params ? '2px solid white' : '2px solid rgba(255, 255, 255, 0.5)'};

    @media ${device.mobile} {
      border-bottom: unset;
    }
  }

  @media ${device.tablet} {
    padding: 2rem 1rem;
  }

  @media ${device.mobile} {
    padding: 1.5rem;
    height: 0;
  }
`;

const Menu = styled.div`
  position: fixed;
  z-index: 99;
  top: 2rem;
  right: 1.5rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <HeaderDiv>
      <LogoDiv>
        <Logo />
      </LogoDiv>
      <Menu onClick={() => setShowNav(!showNav)}>
        {showNav ? <Close /> : <Hamburger />}
      </Menu>
      <Line />
      <Nav show={showNav ? true : false}>
        <ItemWrapper>
          <ItemNav
            params={pathname === '/' ? true : false}
            onClick={() => navigate('/')}
          >
            <div>
              <b>00</b> HOME
            </div>
          </ItemNav>
          <ItemNav
            params={pathname === '/destination' ? true : false}
            onClick={() => navigate('/destination')}
          >
            <div>
              <b>01</b> DESTINATION
            </div>
          </ItemNav>
          <ItemNav
            params={pathname === '/crew' ? true : false}
            onClick={() => navigate('/crew')}
          >
            <div>
              <b>02</b> CREW
            </div>
          </ItemNav>
          <ItemNav
            params={pathname === '/technology' ? true : false}
            onClick={() => navigate('/technology')}
          >
            <div>
              <b>03</b> TECHNOLOGY
            </div>
          </ItemNav>
        </ItemWrapper>
      </Nav>
    </HeaderDiv>
  );
};

export default Header;
