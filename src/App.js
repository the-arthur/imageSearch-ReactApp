import { useState } from 'react';
import ImageList from './components/ImagesList/ImageList';
import SearchForm from './components/SearchForm/SearchForm';
import './css/App.css';

function App() {


  const [searchQuery, setSearchQuery] = useState('')


  function searchQuerySetter(searchInput) {
    setSearchQuery(searchInput);
  }

  // console.log(searchQuery)

  return (
    <div className="App">
      <h1>Custom Image Search</h1>
      <SearchForm searchQuerySetter={searchQuerySetter} />
      <ImageList searchQuery={searchQuery} />
      <a href="https://github.com/the-arthur" target="_blank">Made by <span>the-arthur</span></a>
    </div>
  );
}

export default App;
