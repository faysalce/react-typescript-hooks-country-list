import React, { ReactElement } from 'react';
import useCountries from '../hooks/useCountries';
import { AppCtx } from '../models';

const initialContext: AppCtx = {
  isLoading: false,
  isError: '',
  countries: []
}

export const CountryContext = React.createContext(initialContext);

function CountryContainer(props: {children: ReactElement}) {
  const [isLoading, isError, countries] = useCountries();

  return (
    <CountryContext.Provider value={{isLoading, isError, countries}}>
      {props.children}
    </CountryContext.Provider>
  )
}

export default CountryContainer;
