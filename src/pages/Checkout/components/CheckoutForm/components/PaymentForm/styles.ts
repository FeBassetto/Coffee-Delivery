import styled from 'styled-components'

export const PaymentFormContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const PaymentButtonContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  svg {
    width: 14px;
    color: ${(props) => props.theme['purple-900']};
  }

  .active {
    border: 1px solid ${(props) => props.theme['purple-900']};
    background: ${(props) => props.theme['purple-100']};
  }
`
export const StyledPaymentButton = styled.button`
  width: 100%;
  height: 51px;

  padding: 16px;

  display: flex;
  align-items: center;
  gap: 12px;

  background: ${(props) => props.theme['base-button']};

  text-transform: uppercase;
  font-size: 12px;

  border-radius: 6px;

  cursor: pointer;

  :hover:not(.active) {
    background: ${(props) => props.theme['base-hover']};
  }
`
