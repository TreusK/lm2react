import './Drag.css';
import chest from './img/minichest.png';
import grail from './img/minigrail.png';

function Drag() {

    //event for drag start on the icons
    function dragstart(e, letter) {
        e.dataTransfer.setData('text', letter);
    }

    return(
        <div className='Drag'>
            <div onDragStart={(e) => dragstart(e, 'g')}> <img src={grail} alt='grailIcon'/> </div>
            <div onDragStart={(e) => dragstart(e, 'c')}> <img src={chest} alt='chestIcon'/> </div>
        </div>
    )
}

export default Drag;