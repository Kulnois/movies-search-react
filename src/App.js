import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'; 

function App() {
  return (
    <div>
      <h1>Hello Movies Search</h1>
      <SearchBox />
      <CardList />
    </div>
  );
}

export default App;