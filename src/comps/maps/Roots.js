import './Roots.css';
import Notes from '../Notes';
import Colors from '../Colors';

function Roots({ changeCell, cellContent }) {
  return (
    <div>
      <h2>Roots of Yggdrasil</h2>
      <Colors />
      <div id="rootMap">
        <div className="grid 0" onClick={changeCell}>{cellContent[0]}</div>
        <div className="grid 1" onClick={changeCell}>{cellContent[1]}</div>
        <div></div>
        <div className="grid 2" onClick={changeCell}>{cellContent[2]}</div>
        <div></div>
        <div className="grid"></div>
        <div className="grid"></div>
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
        <div></div>
        <div></div>
        <div className="grid"></div>
        <div className="grid"></div>
        <div className="grid"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="grid"></div>
        <div className="grid"></div>
        <div className="grid"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="grid"></div>
        <div className="grid"></div>
        <div className="grid"></div>
        <div></div>
        <div></div>
      </div>
      <Notes />
    </div>
  );
}

export default Roots;