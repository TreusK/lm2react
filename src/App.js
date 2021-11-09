import './App.css';
import Zone from './comps/Zone';
//import Roots from './comps/maps/Roots';
//import Annfwn from './comps/maps/Annfwn';
import {useReducer} from 'react';
import mapsGrid from './comps/maps/mapsGrid';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';

function App() {
  /*
  const [roots, setRoots] = useState(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
  const [rootsNotes, setRootsNotes] = useState(['1- Gate to La Mulana', 'note 2', 'asdjhasjkdhj '])
  const [annfwn, setAnnfwn] = useState(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
  const [annfwnNotes, setAnnfwnNotes] = useState(['annnotes1', 'annnotes2', '3- boss here'])

  const [isAnotherInputOpen, setIsAnotherInputOpen] = useState(false);
  */

  

  //Function to use a different setState depending on the map name
  /*
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
  }*/

  //Function to use a different setState for the notes depending on the map name
  /*
  function dynamicNotesSetState(name, index, newNote) {
    switch (name) {
      case 'roots':
        let rootsNotesCopy = [...rootsNotes];
        if(newNote === '') {
          rootsNotesCopy.splice(index, 1);
        } else if(newNote === 'New Note'){
          rootsNotesCopy.push(newNote);
        } else {
          rootsNotesCopy[index] = newNote;
        }
        setRootsNotes(rootsNotesCopy);
        break;
      case 'annfwn':
        let annfwnNotesCopy = [...annfwnNotes];
        if(newNote === '') {
          annfwnNotesCopy.splice(index, 1);
        } else {
          annfwnNotesCopy[index] = newNote;
        }
        setAnnfwnNotes(annfwnNotesCopy);
        break;
      default:
        break;
    }
  }*/

  //Function to close text input when you press enter
  /*
  function changeAndCloseInput(e) {
    if(e.key === 'Enter') {
      let whichMap = e.target.parentElement.classList[0];
      let whichIndex = +e.target.parentElement.classList[1];
      let newString = e.target.value;
      e.target.remove();
      dynamicNotesSetState(whichMap, whichIndex, newString);
      setIsAnotherInputOpen(false);
    }
  }*/

  //Function to change notes when clicked on them
  /*
  function changeNote(e) {
    if(isAnotherInputOpen === false) {
      setIsAnotherInputOpen(true);
      let listItem = e.target;
      let inputChild = document.createElement('input');
      inputChild.value = listItem.textContent;
      inputChild.onkeydown = changeAndCloseInput;
      listItem.append(inputChild);
    }
  }*/

  //Function to add new <li> item when the Add button is clicked
  /*
  function addNewNote(whichMapNotes) {
    dynamicNotesSetState(whichMapNotes, 404, 'New Note');
  }*/

  //////////////////////Testing Map component/////////////////////
  //Legacy state
  const useLegacyState = initialState => useReducer(
    (state, update) => ({ ...state, ...update }),
    initialState,
  );

  const [roots, setRoots] = useLegacyState({
    zoneName: 'Roots of Yggdrasil',
    mapContent: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    mapGrid: [7, 6],
    notesContent: ['blablabla', 'blobloblo'],
  });
  const [annfwn, setAnnfwn] = useLegacyState({
    zoneName: 'Annfwn',
    mapContent: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    mapGrid: [7, 5],
    notesContent: ['array of strings here'],
  });

  //Function to change the cell content (number) on click
  /*
  function changeCell(e, nameOfMap, stateOfMap) {
    let mapCopy = [...stateOfMap];
    let cellIndex = +e.target.classList[1];
    if(mapCopy[cellIndex] === '') {
      mapCopy[cellIndex] = '1'
    } else if(+mapCopy[cellIndex] < 15) {
      let valueAsInt = +mapCopy[cellIndex];
      valueAsInt++;
      mapCopy[cellIndex] = String(valueAsInt);
    } else {
      mapCopy[cellIndex] = '';
    }
    dynamicSetState(nameOfMap, mapCopy);
  }*/

  function handleClickOnCell(e, setWhichState, whichZone) {
    let cellIndex = +e.target.classList[1];
    let newMapContent = [...whichZone.mapContent];
    newMapContent[cellIndex] = '1';
    setWhichState({mapContent: newMapContent});
  }

  return (
    <div>
      Header here maybe
      <Zone zone={roots} mapGrid={mapsGrid.rootsGrid} cellClick={handleClickOnCell} setWhichState={setRoots}/>
      <Zone zone={annfwn} mapGrid={mapsGrid.annfwnGrid} cellClick={handleClickOnCell} setWhichState={setAnnfwn}/>
    </div>
  );
}

export default App;

//Map Component
//<Map mapInfo={rootsTest} mapGrid={mapsGrid.rootsGrid}/>

//Old map specific component
//<Roots changeCell={(e) => changeCell(e, 'roots', roots)} cellContent={roots} notes={rootsNotes} changeNote={changeNote} addNewNote={addNewNote}/>
