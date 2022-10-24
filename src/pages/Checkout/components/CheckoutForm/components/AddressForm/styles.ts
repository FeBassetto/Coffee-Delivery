import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  .addressForm__form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 16px 12px;
  }
`

interface FormInputProps {
  width: string
}

export const StyledFormInput = styled.input<FormInputProps>`
  width: ${(props) => props.width};

  padding: 12px;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  font-size: 14px;

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  :focus {
    border: 1px solid ${(props) => props.theme['yellow-900']};
  }
`
