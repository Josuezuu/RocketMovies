import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > header {
    width: 100%;
    height: 144px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    display: flex;
    align-items: center;
    padding-left: 144px;
    > a {
      color: ${({ theme }) => theme.COLORS.PINK};
      display: flex;
      align-items: center;
      gap: 8px;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 24px;
    }
  }
`;
export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    margin-bottom: 8px;
  }
  > div:nth-child(4) {
    margin-top: 48px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  width: 186px;
  height: 186px;
  > img {
    width: 186px;
    height: 186px;

    border-radius: 50%;
  }
  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;
    input {
      display: none;
    }
    #camera {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${({ theme }) => theme.COLORS.PINK};
      width: 48px;
      height: 48px;
      border-radius: 800px;
      background-color: ${({ theme }) => theme.COLORS.PINK};
    }
    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;
