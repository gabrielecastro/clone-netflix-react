import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [ movieSelected, setMovieSelected ] = useState([]);

  const contextValue = {
    movieSelected,
    setMovieSelected,
  }

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
