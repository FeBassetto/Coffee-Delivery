import styled from 'styled-components'

export const InformationsContainer = styled.div`
  width: 526px;
  padding: 40px;

  border: 1px solid ${(props) => props.theme['purple-900']};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  > div {
    width: 100%;

    display: flex;
    align-items: center;
    gap: 15px;

    font-size: 16px;

    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }
`
