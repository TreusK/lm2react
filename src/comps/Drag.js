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
            <div onDragStart={(e) => dragstart(e, 'g')} className='dragIcon'> <img src={grail} alt='grailIcon'/> </div>
            <div onDragStart={(e) => dragstart(e, 'c')} className='dragIcon'> <img src={chest} alt='chestIcon'/> </div>
            <div draggable='true' onDragStart={(e) => dragstart(e, '')} className='dragIcon reset'></div>
        </div>
    )
}

export default Drag;