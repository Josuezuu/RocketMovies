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
  }
`;

export const Form = styled.form`
  margin: 40px 123px 40px;
  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    align-items: center;
    gap: 8px;
  }
  > h1 {
    font-size: 36px;
    margin-top: 24px;
  }
  h3 {
    margin-top: 40px;
    font-weight: 400;
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  > section {
    margin-top: 40px;
    display: flex;
    gap: 40px;

    button:nth-child(1) {
      width: 100%;
      background-color: ${({ theme }) => theme.COLORS.PINK};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      height: 56px;
      border: 0;
      padding: 0 16px;
      border-radius: 10px;
      font-weight: 500;
      font-size: 16px;
    }
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 230px;
  margin-top: 40px;
  padding: 16px;
  resize: none;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 10px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: 0;
  outline: none;
  font-size: 16px;
  font-family: "Roboto Slab", sans-serif;
  ::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;

export const TagArea = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 24px;
  width: 100%;
  background: rgba(13, 12, 15, 1);
  padding: 1.6rem;
  border-radius: 8px;
`;
