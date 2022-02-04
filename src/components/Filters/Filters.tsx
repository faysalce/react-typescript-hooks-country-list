import React from 'react';
import {
  StyledFilters,
  StyledFiltersMaxCenter,
  StyledSearch,
  StyledRegionTrans,
  StyledInput, StyledSelect,
} from './StyledFilters';
import FontAwesome from 'react-fontawesome';

export type FiltersProps = {
  search: string,
  region: string,
  trans: string,
  population: string,
  onFilter: (param: {name: string, value: string}) => void
}

function Filters(props: FiltersProps) {
  const {search, region, trans, population,  onFilter} = props;
  const onChange = (name: string) => (e: {target: {value: string}}) => onFilter({name: name, value: e.target.value});

  return (
    <StyledFilters>
      <StyledFiltersMaxCenter>
      <StyledRegionTrans>
        <StyledSearch>
          <FontAwesome name="search" />
          <StyledInput
            value={search}
            onChange={onChange('search')}
            placeholder="Search for a country"
          />
        </StyledSearch>
        <StyledSearch>
          <StyledInput
            value={population}
            type="number"
            onChange={onChange('population')}
            placeholder="Filter by population"
          />
        </StyledSearch>
        </StyledRegionTrans>
        <StyledRegionTrans>
        <StyledSelect
          value={region}
          onChange={onChange('region')}
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </StyledSelect>
        <StyledSelect
          value={trans}
          onChange={onChange('trans')}
        >
        
          <option value="">Translate</option>
          <option value="br">br</option>
          <option value="pt">pt</option>
          <option value="nl">nl</option>
          <option value="hr">hr</option>
          <option value="fa">fa</option>
          <option value="de">de</option>
          <option value="es">es</option>
          <option value="fr">fr</option>
          <option value="ja">fa</option>
          <option value="it">fa</option>
          <option value="hu">hu</option>
        </StyledSelect>
        </StyledRegionTrans>
      </StyledFiltersMaxCenter>
    </StyledFilters>
  )
}

export default Filters
