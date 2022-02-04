import React, {useState} from 'react';
import StyledHeader, {
  HeaderContainer,
  AppTitle, ThemeButton
} from './StyledHeader';
import { Global } from '../Styled';

export default function Header() {
  const [isLight, setTheme] = useState(true);
  const toggleTheme = () => setTheme(!isLight);

  return (
    <StyledHeader>
      <Global isLight={isLight} />
      <HeaderContainer>
        <AppTitle to="/" >Country List API </AppTitle>
        <ThemeButton onClick={toggleTheme}>
          <span className="fa fa-moon-o" />
          {isLight ? 'Dark' : 'Light'} Mode
        </ThemeButton>
      </HeaderContainer>
    </StyledHeader>
  )
}
