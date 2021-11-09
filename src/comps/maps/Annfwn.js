import './Annfwn.css';
import Notes from '../Notes';

function Annfwn({ changeCell, cellContent, notes, changeNote, addNewNote }) {
  return (
    <div>
      <h2>Annfwn</h2>
      <div id="annfwnMap">
            <div></div>
            <div></div>
            <div className="grid 0" onClick={changeCell}>{cellContent[0]}</div>
            <div className="grid 1" onClick={changeCell}>{cellContent[1]}</div>
            <div className="grid 2" onClick={changeCell}>{cellContent[2]}</div>
            <div></div>
            <div></div>
            <div></div>
            <div className="grid 3" onClick={changeCell}>{cellContent[3]}</div>
            <div className="grid 4" onClick={changeCell}>{cellContent[4]}</div>
            <div className="grid 5" onClick={changeCell}>{cellContent[5]}</div>
            <div className="grid 6" onClick={changeCell}>{cellContent[6]}</div>
            <div className="grid 7" onClick={changeCell}>{cellContent[7]}</div>
            <div></div>
            <div></div>
            <div className="grid 8" onClick={changeCell}>{cellContent[8]}</div>
            <div className="grid 9" onClick={changeCell}>{cellContent[9]}</div>
            <div className="grid 10" onClick={changeCell}>{cellContent[10]}</div>
            <div className="grid 11" onClick={changeCell}>{cellContent[11]}</div>
            <div className="grid 12" onClick={changeCell}>{cellContent[12]}</div>
            <div></div>
            <div className="grid 13" onClick={changeCell}>{cellContent[13]}</div>
            <div className="grid 14" onClick={changeCell}>{cellContent[14]}</div>
            <div className="grid 15" onClick={changeCell}>{cellContent[15]}</div>
            <div className="grid 16" onClick={changeCell}>{cellContent[16]}</div>
            <div className="grid 17" onClick={changeCell}>{cellContent[17]}</div>
            <div className="grid 18" onClick={changeCell}>{cellContent[18]}</div>
            <div className="grid 19" onClick={changeCell}>{cellContent[19]}</div>
            <div></div>
            <div className="grid 20" onClick={changeCell}>{cellContent[20]}</div>
            <div className="grid 21" onClick={changeCell}>{cellContent[21]}</div>
            <div className="grid 22" onClick={changeCell}>{cellContent[22]}</div>
            <div className="grid 23" onClick={changeCell}>{cellContent[23]}</div>
            <div className="grid 24" onClick={changeCell}>{cellContent[24]}</div>
            <div></div>
        </div>
        <Notes notes={notes} changeNote={changeNote} whichMapNotes='annfwn' addNewNote={addNewNote}/>
    </div>
  );
}

export default Annfwn;