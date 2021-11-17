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
    notesContent: ['Click on the map cells to put a number, up to 15', 'Click me to edit, or click the + button to add new notes'],
  });
  const [annfwn, setAnnfwn] = useLegacyState(JSON.parse(localStorage.getItem('Annfwn')) || {
    zoneName: 'Annfwn',
    mapContent: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    mapGrid: [7, 5],
    notesContent: [],
  });
  const [immortal, setImmortal] = useLegacyState(JSON.parse(localStorage.getItem('Immortal Battlefield')) || {
    zoneName: 'Immortal Battlefield',
    mapContent: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    mapGrid: [9, 7],
    notesContent: [],
  });
  const [icefire, setIcefire] = useLegacyState(JSON.parse(localStorage.getItem('Icefire Treetop')) || {
    zoneName: 'Icefire Treetop',
    mapContent: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    mapGrid: [7, 6],
    notesContent: [],
  });
  const [divine, setDivine] = useLegacyState(JSON.parse(localStorage.getItem('Divine Fortress')) || {
    zoneName: 'Divine Fortress',
    mapContent: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    mapGrid: [5, 5],
    notesContent: [],
  });
  const [shrineFrost, setShrineFrost] = useLegacyState(JSON.parse(localStorage.getItem('Shrine of the Frost Giants')) || {
    zoneName: 'Shrine of the Frost Giants',
    mapContent: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    mapGrid: [5, 7],
    notesContent: [],
  });
  const [gateDead, setGateDead] = useLegacyState(JSON.parse(localStorage.getItem('Gate of the Dead')) || {
    zoneName: 'Gate of the Dead',
    mapContent: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    mapGrid: [6, 7],
    notesContent: [],
  });
  const [takamagahara, setTakamagahara] = useLegacyState(JSON.parse(localStorage.getItem('Takagamahara Shrine')) || {
    zoneName: 'Takagamahara Shrine',
    mapContent: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    mapGrid: [6, 7],
    notesContent: [],
  });
  const [heavensLab, setHeavensLab] = useLegacyState(JSON.parse(localStorage.getItem("Heaven's Labyrinth")) || {
    zoneName: "Heaven's Labyrinth",
    mapContent: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    mapGrid: [5, 5],
    notesContent: [],
  });
  const [valhalla, setValhalla] = useLegacyState(JSON.parse(localStorage.getItem('Valhalla')) || {
    zoneName: 'Valhalla',
    mapContent: ['', '', '', '', '', '', '', '', '', '','', '', '', '', '', ''],
    mapGrid: [5, 5],
    notesContent: [],
  });
  const [darkLord, setDarkLord] = useLegacyState(JSON.parse(localStorage.getItem("Dark Lord's Mausoleum")) || {
    zoneName: "Dark Lord's Mausoleum",
    mapContent: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    mapGrid: [5, 8],
    notesContent: [],
  });
  const [ancientChaos, setAncientChaos] = useLegacyState(JSON.parse(localStorage.getItem('Ancient Chaos')) || {
    zoneName: 'Ancient Chaos',
    mapContent: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    mapGrid: [4, 7],
    notesContent: [],
  });

  //Check size of localStorage
  //var _lsTotal=0,_xLen,_x;for(_x in localStorage){ if(!localStorage.hasOwnProperty(_x)){continue;} _xLen= ((localStorage[_x].length + _x.length)* 2);_lsTotal+=_xLen; console.log(_x.substr(0,50)+" = "+ (_xLen/1024).toFixed(2)+" KB")};console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");

  //Check localStorage on every render
  /*useEffect(() => {
    console.log(localStorage);
  })*/

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
      <Zone zone={immortal} mapGrid={mapsGrid.immortalGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setImmortal}/>
      <Zone zone={icefire} mapGrid={mapsGrid.icefireGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setIcefire}/>
      <Zone zone={divine} mapGrid={mapsGrid.divineGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setDivine}/>
      <Zone zone={shrineFrost} mapGrid={mapsGrid.shrineFrostGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setShrineFrost}/>
      <Zone zone={gateDead} mapGrid={mapsGrid.gateDeadGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setGateDead}/>
      <Zone zone={takamagahara} mapGrid={mapsGrid.takamagaharaGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setTakamagahara}/>
      <Zone zone={heavensLab} mapGrid={mapsGrid.heavensLabGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setHeavensLab}/>
      <Zone zone={valhalla} mapGrid={mapsGrid.valhallaGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setValhalla}/>
      <Zone zone={darkLord} mapGrid={mapsGrid.darkLordGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setDarkLord}/>
      <Zone zone={ancientChaos} mapGrid={mapsGrid.ancientChaosGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setAncientChaos}/>
    </div>
  );
};

export default App;

