import React from 'react';

function AppContainer({ children }) {
  return (
    <main
      style={
        { display: 'flex' } //вынести в styles
      }
    >
      {children}
    </main>
  );
}

export default AppContainer;
