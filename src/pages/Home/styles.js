import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  grid-template-rows: 180px;
  grid-template-areas:
    "header"
    "title"
    "movieList";
`;

export const Title = styled.div`
  grid-area: title;
  padding: 0 123px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  > h1 {
    flex: 1;
    font-size: 32px;
  }
  > a {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    height: 48px;
    width: 207px;
    min-width: fit-content;
    border: 0;
    padding: 0 32px;
    border-radius: 10px;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    &:disabled {
      opacity: 0.5;
    }
  }
`;

export const MovieList = styled.div`
  grid-area: movieList;
  margin: 0 123px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 80px;
`;
