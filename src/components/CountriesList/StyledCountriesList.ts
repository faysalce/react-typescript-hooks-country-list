import styled from 'styled-components';
import { maxCenterMixing } from '../Styled';

const StyledCountryList = styled.div`
  ${maxCenterMixing}
  margin-top: 50px;
  margin-bottom: 50px;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr;
  background-color: var(--appBG);

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default StyledCountryList;
