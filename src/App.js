import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchPage from './pages/search/search.component';
import DetailPage from './pages/detail/detail.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={SearchPage} />        
        <Route path='/detail/:id' component={DetailPage} />
      </Switch>
    </div>
  );
}

export default App;