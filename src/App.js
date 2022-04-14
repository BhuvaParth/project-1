import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import City from './containers/City';
import Count from './containers/Count';
import Country from './containers/State';
import Employee from './containers/Employee';
import Madicine from './containers/Madicine';
import State from './containers/State';
import Clock from './containers/Clock';
import ClockFun from './containers/ClockFun';
import Home from './containers/Home/Home';
import Loading from './components/Loading/Loading';

const HomeWithLoading = Loading(Home)

function App(props) {
    const [loading, setLoading] = useState(false); 
    const [data, setData] = useState([]);

    const userData = [
      {
        id: 101,
        name: 'amit'
      },
      {
        id: 105,
        name: 'ajay'
      }
    ]

    useEffect (
      () => {
        setLoading(true)
        setTimeout(() => {setLoading(false); setData(userData)}, 2000)
      },
    [])

  return (
    <div class="text-center fs-3">
      <HomeWithLoading
      isLoading= {loading}
      data={data}

      />

      {/* <Madicine /> */}
      {/* <Employee /> */}
      {/* <Country /> */}
      {/* <City /> */}
      {/* <Array /> */}
      {/* <Count /> */}
      {/* <State /> */}
      {/* <Clock /> */}
      {/* <ClockFun /> */}

    </div>
  );
}

export default App;