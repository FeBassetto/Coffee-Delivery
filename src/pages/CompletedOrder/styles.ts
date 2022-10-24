import styled from 'styled-components'

export const CompletedOrderContainer = styled.section`
  width: 100%;
  margin: 80px 0;

  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;

  .completedOrder__title {
    width: 100%;

    h1 {
      color: ${(props) => props.theme['yellow-900']};
      font-size: 32px;
    }

    h2 {
      font-size: 20px;
    }
  }
`
