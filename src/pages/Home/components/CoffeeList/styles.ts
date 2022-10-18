import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  width: 100%;
  padding: 32px 0;

  > .title-EX {
    font-size: 32px;
    line-height: 42px;
  }
`

export const ListContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 32px;

  margin-top: 54px;
`
