import './App.css';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import NotFound from './components/NotFound';
import { useState, useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=9cb6379847968c53798b890eb3898f8d&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
        })
    }
  }, [searchText])



  return (
    <HashRouter basename='/'>
      <>
        <Navbar searchText={searchText} setSearchText={setSearchText} />
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/about" component={AboutView} />
          <Route path="/search">
            <SearchView keyword={searchText} searchResults={searchResults} />
          </Route>
          <Route path="/movies/:id" component={MovieView} />
          <Route path="" component={NotFound} />
        </Switch>

      </>
    </HashRouter>

  );
}

export default App;
