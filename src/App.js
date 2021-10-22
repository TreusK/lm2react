import './App.css';
import Roots from './comps/maps/Roots';
import Annfwn from './comps/maps/Annfwn';
import {useState, setState} from 'react';

function App() {
  const [roots, setRoots] = useState(['', '', '']);
  const [annfwn, setAnnfwn] = useState(['', '']);

  //Function to change the cell content (number) on click
  function changeCell(e, nameOfMap, stateOfMap) {
    let mapCopy = [...stateOfMap];
    let cellIndex = +e.target.classList[1];
    if(mapCopy[cellIndex] == '') {
      mapCopy[cellIndex] = '1'
    } else if(+mapCopy[cellIndex] < 15) {
      let valueAsInt = +mapCopy[cellIndex];
      valueAsInt++;
      mapCopy[cellIndex] = String(valueAsInt);
    } else {
      mapCopy[cellIndex] = '';
    }
    dynamicSetState(nameOfMap, mapCopy);
  }

  //Function to use a different setState depending on the map name
  function dynamicSetState(name, newState) {
    switch (name) {
      case 'roots':
        setRoots(newState);
        break;
      case 'annfwn':
        setAnnfwn(newState);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      Header here maybe
      <Roots changeCell={(e) => changeCell(e, 'roots', roots)} cellContent={roots}/>
      <Annfwn changeCell={(e) => changeCell(e, 'annfwn', annfwn)} cellContent={annfwn}/>
    </div>
  );
}

export default App;
