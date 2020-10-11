import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme, { colors } from './styles/theme'
import normalize from './styles/normalize';
import { Global, css } from '@emotion/core';
import { StyledLayoutRoot, Header3 } from './components/LayoutRoot';
import Header from './components/Header';
import Container from './components/Container';
import styled from '@emotion/styled';
import { Cog, Anchor, Paw } from './components/FontAwesome';

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 5em);
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.brand};
  font-family: "Avenir Next", sans-serif;
  padding-top: 5em;
`;

const imageMargin = 1;

const Image = styled.img`
  width: calc(100% - ${imageMargin * 2}em);
  max-width: 600px;
  margin-bottom: 4em;
  border-radius: 2px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
  margin-left: ${imageMargin}em;
  margin-right: ${imageMargin}em;
`;

const Logo = styled.img`
  width: 150%;
  max-width: 500px;
`;

const Tagline = styled.h1`
  max-width: 90%;
  text-align: center;
  font-size: 1.15em;
  line-height: 1.5em;
  font-weight: 400;
  margin: 2em 0;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Link = styled.a`
  color: ${colors.brand};
  ${(props) => props.color && 'font-weight: bold;'}
`;

const Button = styled(Link)`
  border: 2px solid ${colors.brand};
  border-radius: 3px;
  padding: 0.5em 2em;
  text-decoration: none;
  font-size: 1em;
  margin: 0 1em;
  ${(props) => props.color && 'background: palevioletred'};
  color: ${(props) => props.about ? 'white' : 'palevioletred'};
`;

const Footer = styled.p`
  margin-top: auto;
  padding-top: 5em;
`;

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;
 
const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
 
const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
`;
 
const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;

const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
 
  svg {
    margin-right: 20px;
  }
`;

const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
 
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
 
  &:active,
  &:focus {
    text-align: left;
  }
`
const MenuLink = styled.a``;

function App() {
  return (

        // {/* // <ThemeProvider theme={theme}>
    // //   <Global
    // //     styles={css`
    // //       ${normalize}
    // //       body {
    // //         background-color: #fafafa;
    // //       }
    // //     `}
    // //   />
    // //   <StyledLayoutRoot>
    // //     <Container>
    // //       <Header title="Ball's Surprise!" />
    // //     </Container>
    // //   </StyledLayoutRoot>
    
    // // </ThemeProvider> */}
    <Wrapper>
    <>
      <Nav>
      <NavHeader>
        <NavLeft>Iron Cloud</NavLeft>
 
        <NavCenter>
          <Input type="text" placeholder="Search" />
        </NavCenter>
 
        <NavRight>
          <MenuLink href="#">
            <Anchor />
          </MenuLink>
 
          <MenuLink href="#">
            <Paw />
          </MenuLink>
 
          <MenuLink href="#">
            <Cog />
          </MenuLink>
        </NavRight>
      </NavHeader>
    </Nav>
  </>
      <div>
      <Logo src="https://iili.io/24rVHb.md.png" />
    </div>
  </Wrapper>
  );

    {/* </> */}
  

    


  
}

export default App;
