import './skeleton.css';
import Zone from './comps/Zone';
import {useState, useReducer, useRef} from 'react';
import mapsGrid from './comps/maps/mapsGrid';
import logo from './comps/img/logo.png';
import hideButton from './comps/img/hide.png';
import showButton from './comps/img/show.png';


function App() {

  //Legacy state
  const useLegacyState = initialState => useReducer(
    (state, update) => ({ ...state, ...update }),
    initialState,
  );

  const namesOfZones = ['Roots of Yggdrasil', 'Annfwn', 'Immortal Battlefield', 'Icefire Treetop', 'Divine Fortress', 'Shrine of the Frost Giants',
  'Gate of the Dead', 'Takagamahara Shrine', "Heaven's Labyrinth", 'Valhalla', "Dark Lord's Mausoleum", 'Ancient Chaos', 'Hall of Malice',
  'Eternal Prison - Gloom', 'Eternal Prison - Doom', 'Nibiru'];
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
  const [hallMalice, setHallMalice] = useLegacyState(JSON.parse(localStorage.getItem('Hall of Malice')) || {
    zoneName: 'Hall of Malice',
    mapContent: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    mapGrid: [7, 5],
    notesContent: [],
  });
  const [prisonGloom, setPrisonGloom] = useLegacyState(JSON.parse(localStorage.getItem('Eternal Prison - Gloom')) || {
    zoneName: 'Eternal Prison - Gloom',
    mapContent: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    mapGrid: [7, 7],
    notesContent: [],
  });
  const [prisonDoom, setPrisonDoom] = useLegacyState(JSON.parse(localStorage.getItem('Eternal Prison - Doom')) || {
    zoneName: 'Eternal Prison - Doom',
    mapContent: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    mapGrid: [5, 7],
    notesContent: [],
  });
  const [nibiru, setNibiru] = useLegacyState(JSON.parse(localStorage.getItem('Nibiru')) || {
    zoneName: 'Nibiru',
    mapContent: ['', '', '', '', '', '', ''],
    mapGrid: [3, 3],
    notesContent: [],
  });

  //State of the notes inputs, to have only one open
  const [isAnotherInputOpen, setIsAnotherInputOpen] = useState(false);

  //State of which Zones should be rendered based on the ones the user wants/knows
  const [userZones, setUserZones] = useState([0]);

  //Sidebar showing/hidden state 
  const [sidebarShowing, setSidebarShowing] = useState(true);


  //////////////////////////////END OF STATES//////////////////////////////


  //////////////////////////////FUNCTIONS ZONE//////////////////////////////
  //Horrible switch function to know which zones to render based on an array of numbers, could have made it dynamic but all I
  //thought was making an array of objects with the info needed to dynamically create each Zone, but then each object was like 
  //3-5 lines per zone so nothing really changed, and this is easy enough to read
  function whichZonesRender(number) {
    let result;
    switch (number) {
      case 0: 
        result = <Zone key='0' zone={roots} mapGrid={mapsGrid.rootsGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setRoots}/>;
        break;
      case 1: 
        result = <Zone key='1' zone={annfwn} mapGrid={mapsGrid.annfwnGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setAnnfwn}/>;
        break;
      case 2: 
        result = <Zone key='2' zone={immortal} mapGrid={mapsGrid.immortalGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setImmortal}/>;
        break;
      case 3:
        result = <Zone key='3' zone={icefire} mapGrid={mapsGrid.icefireGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setIcefire}/>;
        break;
      case 4:
        result = <Zone key='4' zone={divine} mapGrid={mapsGrid.divineGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setDivine}/>;
        break;
      case 5:
        result = <Zone key='5' zone={shrineFrost} mapGrid={mapsGrid.shrineFrostGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setShrineFrost}/>;
        break;
      case 6:
        result = <Zone key='6' zone={gateDead} mapGrid={mapsGrid.gateDeadGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setGateDead}/>;
        break;
      case 7:
        result = <Zone key='7' zone={takamagahara} mapGrid={mapsGrid.takamagaharaGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setTakamagahara}/>;
        break;
      case 8:
        result = <Zone key='8' zone={heavensLab} mapGrid={mapsGrid.heavensLabGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setHeavensLab}/>;
        break;
      case 9:
        result = <Zone key='9' zone={valhalla} mapGrid={mapsGrid.valhallaGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setValhalla}/>;
        break;
      case 10:
        result = <Zone key='10' zone={darkLord} mapGrid={mapsGrid.darkLordGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setDarkLord}/>;
        break;
      case 11:
        result = <Zone key='11' zone={ancientChaos} mapGrid={mapsGrid.ancientChaosGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setAncientChaos}/>;
        break;
      case 12:
        result = <Zone key='12' zone={hallMalice} mapGrid={mapsGrid.hallMaliceGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setHallMalice}/>;
        break;
      case 13:
        result = <Zone key='13' zone={prisonGloom} mapGrid={mapsGrid.prisonGloomGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setPrisonGloom}/>;
        break;
      case 14:
        result = <Zone key='14' zone={prisonDoom} mapGrid={mapsGrid.prisonDoomGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setPrisonDoom}/>;
        break;
      case 15:
        result = <Zone key='15' zone={nibiru} mapGrid={mapsGrid.nibiruGrid} cellClick={handleClickOnCell} noteClick={handleChangeNote} setWhichState={setNibiru}/>;
        break;
      default: 
        result = <h1>Whoops!</h1>;
        break;
    }
    return result;
  }

  //Check size of localStorage on render
  // var _lsTotal=0,_xLen,_x;for(_x in localStorage){ if(!localStorage.hasOwnProperty(_x)){continue;} _xLen= ((localStorage[_x].length + _x.length)* 2);_lsTotal+=_xLen};console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
  //Check localStorage on every render
  /*useEffect(() => {
    console.log(localStorage);
  })*/


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

  //Sidebar functions
  //Show-hide the sidebar on click with conditional rendering
  function showHide(e) {
    if(sidebarShowing) {
      e.target.src = showButton;
      setSidebarShowing(false);
    } else {
      e.target.src = hideButton;
      setSidebarShowing(true);
    }
  }

  return (
    <div id='mainApp' className='container'>

      <div id='header' className='row'>
          <img alt='LaMulana2Logo' src={logo}/>
          <h2>An easy way to take notes while playing the game</h2>
      </div>

      <div id='sidebarAndZones' className='row'>
        {sidebarShowing && <Sidebar userZones={userZones} setUserZones={setUserZones}/>}
        <div id='zones' className='nine columns'>
          <div> <img alt='showOrHideButton' src={hideButton} onClick={showHide} /> </div>
          {userZones.map(elem => whichZonesRender(elem))}
          {(userZones.length === 0) ? <h2 id='nothingRenderedH2'>Choose some maps to render from the sidebar</h2> : <></>}
        </div>

      </div> 
      <Footer arrOfSets={[setRoots, setAnnfwn, setImmortal, setIcefire, setDivine, setShrineFrost, 
          setGateDead, setTakamagahara, setHeavensLab, setValhalla, setDarkLord, setAncientChaos, setHallMalice,
          setPrisonGloom, setPrisonDoom, setNibiru]}
              namesOfZones={namesOfZones}/>

    </div>
  );
};



//////////////////////////Sidebar component//////////////////////////
function Sidebar({userZones, setUserZones}) {
  //Sidebar event function to choose which zones to render
  function handleSidebarMapClick(e) {
    let number = +e.target.classList[0];
    let tempArray = [];
    if(userZones.includes(number)) {
      tempArray = userZones.filter(elem => elem !== number);
      setUserZones(tempArray);
    } else {
      tempArray = userZones.concat([number]);
      setUserZones(tempArray);
    }
  };

  return(
    <div id='sidebar' className='three columns'>
      <h3>Maps list</h3>
      <p className={`0 mapSelectorSidebar ${userZones.includes(0) ? 'activated' : ''}`} onClick={handleSidebarMapClick}>Roots of Yggdrasil</p>
      <p className={`1 mapSelectorSidebar ${userZones.includes(1) ? 'activated' : ''}`} onClick={handleSidebarMapClick}>Annwfn</p>
      <p className={`2 mapSelectorSidebar ${userZones.includes(2) ? 'activated' : ''}`} onClick={handleSidebarMapClick}>Immortal Battlefield</p>
      <p className={`3 mapSelectorSidebar ${userZones.includes(3) ? 'activated' : ''}`} onClick={handleSidebarMapClick}>Icefire Treetop</p>
      <p className={`4 mapSelectorSidebar ${userZones.includes(4) ? 'activated' : ''}`} onClick={handleSidebarMapClick}>Divine Fortress</p>
      <p className={`5 mapSelectorSidebar ${userZones.includes(5) ? 'activated' : ''}`} onClick={handleSidebarMapClick}>Shrine of the Frost Giants</p>
      <p className={`6 mapSelectorSidebar ${userZones.includes(6) ? 'activated' : ''}`} onClick={handleSidebarMapClick}>Gate of the Dead</p>
      <p className={`7 mapSelectorSidebar ${userZones.includes(7) ? 'activated' : ''}`} onClick={handleSidebarMapClick}>Takamagahara Shrine</p>
      <p className={`8 mapSelectorSidebar ${userZones.includes(8) ? 'activated' : ''}`} onClick={handleSidebarMapClick}>Heaven’s Labyrinth</p>
      <p className={`9 mapSelectorSidebar ${userZones.includes(9) ? 'activated' : ''}`} onClick={handleSidebarMapClick}>Valhalla</p>
      <p className={`10 mapSelectorSidebar ${userZones.includes(10) ? 'activated' : ''}`} onClick={handleSidebarMapClick}>Dark Lord’s Mausoleum</p>
      <p className={`11 mapSelectorSidebar ${userZones.includes(11) ? 'activated' : ''}`} onClick={handleSidebarMapClick}>Ancient Chaos</p>
      <p className={`12 mapSelectorSidebar ${userZones.includes(12) ? 'activated' : ''}`} onClick={handleSidebarMapClick}>Hall of Malice </p>
      <p className={`13 mapSelectorSidebar ${userZones.includes(13) ? 'activated' : ''}`} onClick={handleSidebarMapClick}>Eternal Prison – Gloom</p>
      <p className={`14 mapSelectorSidebar ${userZones.includes(14) ? 'activated' : ''}`} onClick={handleSidebarMapClick}>Eternal Prison – Doom</p>
      <p className={`15 mapSelectorSidebar ${userZones.includes(15) ? 'activated' : ''}`} onClick={handleSidebarMapClick}>Nibiru</p>
    </div>
  )
};

//////////////////////////Footer component//////////////////////////
function Footer({arrOfSets, namesOfZones}) {
  const elemRef = useRef();


  function exportData(e) {
    saveTemplateAsFile('LM2data.json', localStorage);
  }

  //Function to upload a json file/IMPORT
  function importData(e) {
    let inp = elemRef.current;
    inp.click();
  }

  //Function event for onChange input file
  function loadImportedData(e) {
    let tempFile = e.target.files[0];
    let reader = new FileReader();

    reader.readAsText(tempFile);
    reader.onload = function() {
      let resultObj = JSON.parse(reader.result);
      for(let i=0; i<16; i++) {
        if(resultObj.hasOwnProperty([namesOfZones[i]])) {
          arrOfSets[i](JSON.parse(resultObj[namesOfZones[i]]));
        };
      };
      console.log(resultObj);
    };
    reader.onerror = function() {
      console.log(reader.error);
    }
  }

  //Function to be able to download a local file/EXPORT
  function saveTemplateAsFile(filename, dataObjToWrite) {
    const blob = new Blob([JSON.stringify(dataObjToWrite)], { type: "text/json" });
    const link = document.createElement("a");

    link.download = filename;
    link.href = window.URL.createObjectURL(blob);
    link.dataset.downloadurl = ["text/json", link.download, link.href].join(":");

    const evt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
    });

    link.dispatchEvent(evt);
    link.remove()
  };

  return(
    <div id='footer' className='container'>

      <div className='row exp-imp-explanation'>
        <p>The data is saved in localStorage, but if you wrote a bunch and want a backup just in case, click the Export button</p>
      </div>

      <div id='expImpContainer' className='row'>
        <input type='file' id='inputTag' ref={elemRef} onChange={loadImportedData}/>
        <div className='exp-imp-Btn button' onClick={exportData}>Export</div>
        <div className='exp-imp-Btn button' onClick={importData}>Import</div>
      </div>

    </div>
  )
}

export default App;