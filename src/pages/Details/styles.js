import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  grid-template-areas:
    "header"
    "content";
  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 40px 0;
  }
`;

export const Content = styled.div`
  max-width: 1121px;
  margin: 0 auto;
  display: flex;

  flex-direction: column;
  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    gap: 5px;
    justify-content: flex-start;
  }
  > section {
    margin-top: 40px;
    display: flex;
    gap: 8px;
  }
  > p {
    margin-top: 40px;
    text-align: justify;
    margin-bottom: 20px;
  }
`;

export const Title = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 20px;
  > h1 {
    font-size: 36px;
  }
  > span {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 36px;
    padding: 0 10px;
    border-radius: 10px;
  }
`;

export const Stamps = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 15px;
`;
