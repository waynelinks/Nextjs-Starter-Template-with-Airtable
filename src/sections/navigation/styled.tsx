import styled from 'styled-components'

import { FullBleed } from '@/styles/shared'

export const Wrapper = styled(FullBleed)`
  position: sticky;
  top: 0;

  grid-row: 1 / 2;

  display: grid;
  grid-template-columns: 1fr min(85ch, calc(100% - 2rem)) 1fr;
  gap: 1rem;

  & > * {
    grid-column: 2;
  }
`
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
