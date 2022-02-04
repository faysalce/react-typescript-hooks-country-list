import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  maxCenterMixing,
  themeColorsMixing,
  shadowMixing,
} from '../Styled';

export const StyledCountryPage = styled.div`
  ${maxCenterMixing};
  margin-top: 3em;
`;

export const BackLink = styled(Link)`
  ${themeColorsMixing}
  ${shadowMixing};
  border-radius: 5px;
  text-decoration: none;
  padding: .5em 2em;
`;

export const BorderLink = styled(BackLink)`
  padding: .5em 1em;
  margin: .5em;
  display: inline-block;
`;

export const CountryHolder = styled.div`
  color: var(--cardText);
  margin: 2em 0;
  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Flag = styled.img`
  max-width: 100%;

  @media (min-width: 1000px) {
    width: 40%;
  }
`;

export const InfoHolder = styled.div`
  @media (min-width: 1000px) {
    width: 55%;
  }
`;

export const CountryTitle = styled.h2`
  font-size: 2rem;
`;

export const InfoSection = styled.div`
  margin: 1em 0;
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const InfoPrimary = styled.div`
  margin-bottom: 2em;

  @media (min-width: 600px) {
    margin-bottom: 0;
  }
`;

export const InfoSecondary = styled.div``;

