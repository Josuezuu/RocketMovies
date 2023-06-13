import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.GRAY_TEXT : theme.COLORS.WHITE};
  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_100}` : "none"};

  > input {
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
    color: ${({ theme, isNew }) =>
      isNew ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
  }

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
