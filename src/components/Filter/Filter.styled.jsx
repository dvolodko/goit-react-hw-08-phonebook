import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const InputField = styled.input`
  width: 360px;
`;
