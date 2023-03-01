import styled from '@emotion/styled';

export const ContactItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const DeleteButton = styled.button`
  max-width: 120px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 6px;
  &:hover {
    background-color: #6ee9ff;
  }
  margin-left: 15px;
`;
