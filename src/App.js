import './App.css';
import Roots from './comps/maps/Roots';
import Annfwn from './comps/maps/Annfwn';
import {useState, setState} from 'react';

function App() {
  const [roots, setRoots] = useState(['', ''])

  function changeCell(e) {
    let rootsCopy = [...roots];
    let cellIndex = +e.target.classList[1];
    if(rootsCopy[cellIndex] == '') {
      rootsCopy[cellIndex] = '1'
    } else if(+rootsCopy[cellIndex] < 15) {
      let valueAsInt = +rootsCopy[cellIndex];
      valueAsInt++;
      rootsCopy[cellIndex] = String(valueAsInt);
    } else {
      rootsCopy[cellIndex] = '';
    }
    setRoots(rootsCopy);
  }

  return (
    <div>
      Header here maybe
      <Roots changeCell={changeCell} cellContent={roots}/>
      <Annfwn />
    </div>
  );
}

export default App;
