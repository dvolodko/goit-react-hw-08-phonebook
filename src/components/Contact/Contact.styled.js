import styled from '@emotion/styled';
import { BsFillPersonFill } from 'react-icons/bs';

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
  transition: background-color 250ms ease-in-out;
  &:hover {
    background-color: #6ee9ff;
  }
  margin-left: 15px;
`;

export const ContactIcon = styled(BsFillPersonFill)`
  color: #33ff00;
  margin-right: 16px;
  vertical-align: middle;
`;
