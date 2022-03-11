import styled from 'styled-components'

import { QUERIES } from '@/styles/mediaQueries'

export const Container = styled.div`
  z-index: 20;

  margin-right: -7px;

  @media screen and ${QUERIES.laptopAndUp} {
    display: none;
  }
`
