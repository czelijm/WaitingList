
import { Global,css } from '@emotion/react';
import React, { useEffect } from 'react';
import './App.css';
import ListContainer from './components/list-container/list.container';
import RootContainer from './components/root-container/root-container';
import { Colors } from './constants/colors';

function App() {

  return (
    <div className="App">
      <Global styles={css` body { padding:5%;  background-color:${Colors.DARK_BLUE};}; `}/>
      <RootContainer/>
    </div>
  );
}

export default App;
