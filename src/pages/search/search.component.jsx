import React from 'react';

import { SearchBox } from '../../components/search-box/search-box.component';
import { CardList } from '../../components/card-list/card-list.component';

const SearchPage = () => (
    <div>
        <h1>Movies Search</h1>
        <SearchBox />
        <CardList />
    </div>
);

export default SearchPage;

// http://www.omdbapi.com/?i=tt3896198&apikey=d0cef94a