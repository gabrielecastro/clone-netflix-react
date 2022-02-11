import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [ selectedItem, setSelectedItem ] = useState([]);

  const contextValue = {
    selectedItem,
    setSelectedItem,
  }

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
