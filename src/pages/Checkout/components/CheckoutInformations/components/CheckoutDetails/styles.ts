import styled from 'styled-components'

export const CheckoutDetailsContainer = styled.div`
  width: 100%;

  padding: 40px;
  border-radius: 6px 44px;

  background: ${(props) => props.theme['base-card']};

  margin-top: 15px;

  .emptyCheckout {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button[type='submit'] {
    width: 100%;
    height: 46px;
    margin-top: 24px;

    background-color: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme.white};

    text-transform: uppercase;

    padding: 12px 8px;
    border-radius: 6px;

    cursor: pointer;

    :hover {
      background: ${(props) => props.theme['yellow-900']};
    }
  }
`
