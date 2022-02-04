import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {themeColorsMixing, maxCenterMixing} from '../Styled';

const Header = styled.header`
  ${themeColorsMixing}
`;

export const HeaderContainer = styled.div`
  ${maxCenterMixing}
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AppTitle = styled(Link)`
  ${themeColorsMixing};
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  @media (min-width: 600px) {
    font-size: 2rem;
  }
`;

export const ThemeButton = styled.button`
  ${themeColorsMixing}
  border: none;
  outline: none;
  padding: 1em 0;
  background: transparent;
  cursor: pointer;
  font-size: 1rem;
  span {
    padding-right: .5em;
  }

  @media (min-width) {
    font-size: 1.2rem;
  }
`;

export default Header;
