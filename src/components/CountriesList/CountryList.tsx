import React, {useContext, useState, useEffect} from 'react';
import StyledCountryList from './StyledCountriesList';
import { CountryContext } from '../../container/CountriesContainer';
import CountryCard from '../CountryCard/CountryCard';
import Filters from '../Filters/Filters';
import {Info} from '../Styled';
import PlaceHolderLoader from "../PlaceHolderLoader/PlaceHolderLoader"

function CountryList() {
  const {
    countries,
    isLoading,
    isError,
  } = useContext(CountryContext);

  const [search, setSearch] = useState<string>('');
  const [region, setRegion] = useState<string>('');
  const [trans, seTrans] = useState<string>('');
  const [population, setPopulation] = useState<string>('');


  const setFilter = (param: {name: string, value: string}) => {
    const method = param.name === 'search' ? setSearch : param.name === 'region'?setRegion:param.name === 'trans'?seTrans:setPopulation;
    method(param.value);
  }


  const filteredCountries = countries
  .filter(({name}) => search === '' || name.toLowerCase().includes(search.toLowerCase()))
  .filter((country) => region === '' || country.region.toLowerCase() === region)
  .filter((country) => population === '' || country.population <= parseInt(population));

  return (
    <>
      {!isLoading && (<Filters
        search={search}
        region={region}
        trans={trans}
        population={population}
        onFilter={setFilter}
      />)}
      {isLoading && !isError && <Info><PlaceHolderLoader/></Info>}
      {!isLoading && isError && <Info>{isError}</Info>}
      {!isLoading && filteredCountries.length === 0 && <div>No results</div>}
      <StyledCountryList>
        {filteredCountries.length > 0 && filteredCountries.map(c => <CountryCard code={trans} key={c.alpha3Code} {...c}/>)}
      </StyledCountryList>
    </>
  )
}

export default CountryList;
