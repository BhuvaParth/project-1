import React from 'react';
import City from './containers/City';
import CityFun from './containers/CityFun';
import Country from './containers/Country';

function App(props) {
  return (
    <div>
      <Country />
      <City />
      <CityFun />
      <Array />
    </div>
  );
}

export default App;