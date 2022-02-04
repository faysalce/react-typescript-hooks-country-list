import React, { useContext } from 'react';
import FontAwesome from 'react-fontawesome';
import { CountryContext } from '../../container/CountriesContainer';
import {
  StyledCountryPage,
  BackLink, BorderLink,
  CountryHolder,
  Flag, InfoHolder,
  CountryTitle,
  InfoSection,
  InfoPrimary, InfoSecondary
} from './StyledCountryPage';
import { useParams } from 'react-router-dom';
import InfoRow from '../InfoRow/InfoRow';
import {Info} from '../Styled';
import { Currency, Language } from '../../models';

function CountryPage() {
  const {alpha3Code} = useParams();
  let selectedCountry: any;
  let borderCountries;

  const {
    isLoading,
    isError,
    countries
  } = useContext(CountryContext);

  if (countries.length > 0) {
    selectedCountry = countries.filter(country => country.alpha3Code.toLowerCase() === alpha3Code.toLowerCase())[0];
    borderCountries = countries.filter(country => selectedCountry.borders.indexOf(country.alpha3Code) > -1);
  }

  return (
    <StyledCountryPage>
      <BackLink to="/"><FontAwesome name="long-arrow-left" /> Back</BackLink>
      {isLoading && !isError && <Info>Loading...</Info>}
      {!isLoading && isError && <Info>{isError}</Info>}
      {selectedCountry && <CountryHolder>
        <Flag src={selectedCountry.flag} alt={`Flag of ${selectedCountry.name}`} />
        <InfoHolder>
          <CountryTitle>{selectedCountry.name}</CountryTitle>
          <InfoSection>
            <InfoPrimary>
              <InfoRow name="Native Name" value={selectedCountry.nativeName} />
              <InfoRow name="Population" value={selectedCountry.population} />
              <InfoRow name="Region" value={selectedCountry.region} />
              <InfoRow name="Sub Region" value={selectedCountry.subregion} />
              <InfoRow name="Capital" value={selectedCountry.capital} />
            </InfoPrimary>
            <InfoSecondary>
              <InfoRow name="Top Level Domain" value={selectedCountry.topLevelDomain} />
              <InfoRow name="Currencies" value={selectedCountry.currencies.map((c: Currency) => c.name).join(', ')} />
              <InfoRow name="Languages" value={selectedCountry.languages.map((l: Language) => l.name).join(', ')} />
            </InfoSecondary>
          </InfoSection>
          <p>
            <b>Border Countries: </b>
            {borderCountries?.map(bc => <BorderLink key={bc.alpha3Code} to={bc.alpha3Code}>{bc.name}</BorderLink>)}
          </p>
        </InfoHolder>
      </CountryHolder>}
    </StyledCountryPage>
  )
}

export default CountryPage;
