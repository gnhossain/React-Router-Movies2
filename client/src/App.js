import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div> 
        {/* Replace this Div with Routes */}
        <Route exact path="/" component={MovieList}/>
        <Route path="/movies/:id" render={props => (
          <MovieList {...props} />)}/>
        
      </div>
    </div>
  );
};

export default App;
