import './App.css';
import Zone from './comps/Zone';
//import Roots from './comps/maps/Roots';
//import Annfwn from './comps/maps/Annfwn';
import {useState, useReducer, useEffect} from 'react';
import mapsGrid from './comps/maps/mapsGrid';

function App() {

  //Legacy state
  const useLegacyState = initialState => useReducer(
    (state, update) => ({ ...state, ...update }),
    initialState,
  );

  //States of all maps
  const [roots, setRoots] = useLegacyState(JSON.parse(localStorage.getItem('Roots of Yggdrasil')) || {
    zoneName: 'Roots of Yggdrasil',
    mapContent: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    mapGrid: [7, 6],
    notesContent: ['Click me to edit, or click the + button to add new notes'],
  });
  const [annfwn, setAnnfwn] = useLegacyState(JSON.parse(localStorage.getItem('Annfwn')) || {
    zoneName: 'Annfwn',
    mapContent: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    mapGrid: [7, 5],
    notesContent: [],
  });

  useEffect(() => {
    console.log(localStorage);
  })

  //State of the notes inputs, to have only one open
  const [isAnotherInputOpen, setIsAnotherInputOpen] = useState(false);

  //Map functions
  //Change the value of the maps cells on click, from 1 to 15, back to empty
  function handleClickOnCell(e, setWhichState, whichZone) {
    let cellIndex = +e.target.classList[1];
    let newMapContent = [...whichZone.mapContent];
    if(newMapContent[cellIndex] === '') {
      newMapContent[cellIndex] = '1';
    } else if(+newMapContent[cellIndex] < 15) {
      let valueAsInt = +newMapContent[cellIndex];
      valueAsInt++;
      newMapContent[cellIndex] = String(valueAsInt);
    } else {
      newMapContent[cellIndex] = '';
    }
    setWhichState({mapContent: newMapContent});
  }
  
  //Notes functions
  //Function to change notes when clicked on them
  function handleChangeNote(e, whichSetZone, whichZone) {
    if(isAnotherInputOpen === false) {
      setIsAnotherInputOpen(true);
      let listItem = e.target;
      let inputChild = document.createElement('input');
      inputChild.value = listItem.textContent;
      inputChild.onkeydown = (e) => changeAndCloseInput(e, whichSetZone, whichZone);
      listItem.append(inputChild);
    }
  }

  //Event for the input that appears when editing a note
  function changeAndCloseInput(e, whichSetZone, whichZone) {
    if(e.key === 'Enter') {
      let notesContentCopy = [...whichZone.notesContent];
      let whichIndex = +e.target.parentElement.classList[0];
      let newString = e.target.value;
      if(newString === '') {
        notesContentCopy.splice(whichIndex, 1);
      } else {
        notesContentCopy[whichIndex] = newString;
      }
      e.target.remove(); 
      whichSetZone({notesContent: notesContentCopy});
      setIsAnotherInputOpen(false);
    }
  }

  return (
    <div>
      Header here maybe
      <Zone zone={roots} mapGrid={mapsGrid.rootsGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setRoots}/>
      <Zone zone={annfwn} mapGrid={mapsGrid.annfwnGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setAnnfwn}/>
    </div>
  );
};

export default App;

