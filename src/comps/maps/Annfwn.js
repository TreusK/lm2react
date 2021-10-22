import './Annfwn.css';
import Notes from '../Notes';
import Colors from '../Colors';

function Annfwn({ changeCell, cellContent }) {
  return (
    <div>
      <h2>Annfwn</h2>
      <Colors />
      <div id="annfwnMap">
            <div></div>
            <div></div>
            <div className="grid 0" onClick={changeCell}>{cellContent[0]}</div>
            <div className="grid 1" onClick={changeCell}>{cellContent[1]}</div>
            <div className="grid"></div>
            <div></div>
            <div></div>
            <div></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div></div>
            <div></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div className="grid"></div>
            <div></div>
        </div>
        <Notes />
    </div>
  );
}

export default Annfwn;