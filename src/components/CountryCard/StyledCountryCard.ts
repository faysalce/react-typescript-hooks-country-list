import styled from 'styled-components';
import {
  themeColorsMixing,
  shadowMixing } from '../Styled';

export const StyledCountryCard = styled.section`
  ${themeColorsMixing}
  ${shadowMixing}
  border-radius: 5px;
  display: grid;
  grid-template-rows: 150px auto;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const StyledInfo = styled.div`
  padding: 20px;
`;

export const CountryHeader = styled.h2`
  font-size: 1.1rem;
  margin-top: 0;
`;
