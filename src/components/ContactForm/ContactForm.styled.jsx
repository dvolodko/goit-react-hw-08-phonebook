import styled from '@emotion/styled';

export const Container = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 400px;
  border: 1px solid black;
  padding: 8px;
`;

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

export const SubmitButton = styled.button`
  max-width: 120px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 6px;
  transition: background-color 250ms ease-in-out;
  &:hover {
    background-color: #6ee9ff;
  }
`;
