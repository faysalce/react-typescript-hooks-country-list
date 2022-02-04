export interface AppCtx  {
  isLoading: boolean,
  isError: string,
  countries: Country[],
}

export interface Currency {
    code: string,
    name: string,
    symbol: string
}

export interface Language {
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string
}

export interface Country {
    alpha3Code: string,
    flag: string,
    currencies: Currency[],
    languages: Language[],
    name: string,
    topLevelDomain: string[],
    capital: string,
    region: string,
    subregion: string,
    population: number,
    borders: string[],
    nativeName: string,
    translations:any
    
}
