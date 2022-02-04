import React, {useEffect} from 'react';
import {
  StyledCountryCard,
  StyledImg,
  StyledInfo,
  CountryHeader
} from './StyledCountryCard';
import { Country } from '../../models';
import { Link } from 'react-router-dom';
import InfoRow from '../InfoRow/InfoRow';

type CountryCardProps = Pick<Country,
  'name'|
  'alpha3Code'|
  'flag'|
  'population'| 'region'| 'capital' | 'translations'
>;

function CountryCard(props: any) {
  const {
    name, flag,
    alpha3Code, population, region, capital, code, translations
  } = props;
 
  return (
    <StyledCountryCard>
      <Link to={`/${alpha3Code}`}>
        <StyledImg alt={`Flag of ${name}`} src={flag} />
      </Link>
      <StyledInfo>
        <CountryHeader>{code?translations[code]:name}</CountryHeader>
        <InfoRow name="Population" value={population} />
        <InfoRow name="Region" value={region} />
        <InfoRow name="Capital" value={capital} />
      </StyledInfo>
    </StyledCountryCard>
  )
}

export default CountryCard;
