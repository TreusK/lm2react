import './App.css';
import Roots from './comps/maps/Roots';
import Annfwn from './comps/maps/Annfwn';
import {useState} from 'react';

function App() {
  const [roots, setRoots] = useState(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
  const [rootsNotes, setRootsNotes] = useState(['note 1', 'note 2', 'asdjhasjkdhj hajsdh jahsdjl alsdh jlahsdlj aljshdkjashdkj'])
  const [annfwn, setAnnfwn] = useState(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
  const [annfwnNotes, setAnnfwnNotes] = useState(['annnotes1', 'annnotes2', '3- boss here'])

  const [isAnotherInputOpen, setIsAnotherInputOpen] = useState(false);

  //Function to change the cell content (number) on click
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

  //Function to use a different setState for the notes depending on the map name
  function dynamicNotesSetState(name, index, newNote) {
    switch (name) {
      case 'roots':
        let rootsNotesCopy = [...rootsNotes];
        if(newNote === '') {
          rootsNotesCopy.splice(index, 1);
        } else {
          rootsNotesCopy[index] = newNote;
        }
        setRootsNotes(rootsNotesCopy);
        break;
      case 'annfwn':
        let annfwnNotesCopy = [...annfwnNotes];
        annfwnNotesCopy[index] = newNote;
        setAnnfwnNotes(annfwnNotesCopy);
        break;
      default:
        break;
    }
  }

  //Function to close text input when you press enter
  function changeAndCloseInput(e) {
    if(e.key === 'Enter') {
      let whichMap = e.target.parentElement.classList[0];
      let whichIndex = +e.target.parentElement.classList[1];
      let newString = e.target.value;
      e.target.remove();
      dynamicNotesSetState(whichMap, whichIndex, newString);
      setIsAnotherInputOpen(false);
    }
  }

  //Function to change notes when clicked
  function changeNote(e) {
    if(isAnotherInputOpen === false) {
      setIsAnotherInputOpen(true);
      let listItem = e.target;
      let inputChild = document.createElement('input');
      inputChild.value = listItem.textContent;
      inputChild.onkeydown = changeAndCloseInput;
      listItem.append(inputChild);
    }
  }

  return (
    <div>
      Header here maybe
      <Roots changeCell={(e) => changeCell(e, 'roots', roots)} cellContent={roots} notes={rootsNotes} changeNote={changeNote}/>
      <Annfwn changeCell={(e) => changeCell(e, 'annfwn', annfwn)} cellContent={annfwn} notes={annfwnNotes} changeNote={changeNote}/>
    </div>
  );
}

export default App;
