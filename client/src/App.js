import React, { useState } from 'react';

import SavedList from './Movies/SavedList';

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
        <Route path="/movies/:id" render={props.movie }/>
        
      </div>
    </div>
  );
};

export default App;
