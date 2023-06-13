import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: 32px;
  border-radius: 16px;
  width: 100%;

  &:hover {
    opacity: 0.8;
  }

  > p {
    margin: 15px 0;
  }
  > footer {
    display: flex;
    gap: 8px;
    height: 24px;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 20px;
  > h1 {
    font-size: 24px;
  }
  > span {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
    padding: 0 8px;
    border-radius: 10px;
  }
`;
