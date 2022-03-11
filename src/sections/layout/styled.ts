import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr min(85ch, calc(100% - 2rem)) 1fr;
  grid-template-rows: 80px auto;
  gap: 1rem;

  & > * {
    grid-column: 2;
  }
`
