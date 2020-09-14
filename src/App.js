import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchPage from './pages/search/search.component';
import DetailPage from './pages/detail/detail.component';
import Footer from  './components/footer/footer.component';

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={SearchPage} />        
        <Route path='/detail/:id' component={DetailPage} />
      </Switch>      
      <Footer />
    </div>
  );
}

export default App;