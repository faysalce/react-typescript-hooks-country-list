import {useState, useEffect} from 'react';
import { ENDPOINT } from '../constatns';
import { Country } from '../models';

export default function useCountries(): [boolean, string, Country[]] {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError('');
    fetch(ENDPOINT)
    .then(ds => ds.json())
    .then(res => setCountries(res))
    .finally(() => setLoading(false))
    .catch(() => setError('Something went wrong'))
  }, []);

  return [isLoading, isError, countries];
}
