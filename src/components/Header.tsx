import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'


import { heights, dimensions, colors } from '../styles/theme'
import Container from './Container'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.white)};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

// const HomepageLink = styled(Link)`
//   color: ${colors.white};
//   font-size: 1.5rem;
//   font-weight: 600;

//   &:hover,
//   &:focus {
//     text-decoration: none;
//   }
// `

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      Home Page Link
    </HeaderInner>
  </StyledHeader>
)

export default Header
