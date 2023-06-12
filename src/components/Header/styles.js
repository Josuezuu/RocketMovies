import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 123px;
`;
export const UserNameText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: fit-content;

  > strong {
    font-size: 18;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  > a {
    display: flex;
    justify-content: right;
    color: rgba(148, 143, 153, 1);
  }
`;
export const Brand = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.PINK};
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 9px;

  > img {
    height: 56px;
    width: 56px;
    border-radius: 50%;
  }
  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    > svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 36px;
    }
  }
`;
