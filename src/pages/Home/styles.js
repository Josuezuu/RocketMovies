import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    "header"
    "newnote"
    "content"
    "content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding-top: 64px;
  text-align: center;

  > li {
    margin-bottom: 24px;
  }
`;
export const Search = styled.div`
  grid-area: search;
  padding: 64px 64px 0;
`;
export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: auto;
`;
export const SubHeader = styled.div`
  display: flex;
  padding: 50px 123px 0;
  justify-content: space-between;
`;
export const NewNote = styled(Link)`
  grid-area: newnote;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: rgba(28, 27, 30, 1);
  border-radius: 8px;
  width: 207px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }
`;
