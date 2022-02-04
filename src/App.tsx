import React from 'react';
import Header from './components/Header';
import { Container } from './components/Styled';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountryContainer from './container/CountriesContainer';
import CountryList from './components/CountriesList/CountryList';
import CountryPage from './components/CountryPage/CountryPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <CountryContainer>
            <Switch>
              <Route exact path="/" component={CountryList}/>
              <Route exact path="/:alpha3Code" component={CountryPage} />
            </Switch>
          </CountryContainer>
        </Container>
      </div>
    </Router>
  );
}

export default App;
