import * as React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import normalize from '../styles/normalize'

const StyledLayoutRoot = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: 10px;
  padding-top: 10px;
`

const Header3 = styled.h3`
  margin-bottom: 10px;
  display: inline-block;
  font-style: normal;
`

export { StyledLayoutRoot, Header3 }