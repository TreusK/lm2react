import './Map.css';
import chest from './img/minichest.png';
import grail from './img/minigrail.png';

/*Map needs 
    -zone, the state of each zone
    -mapGrid, the object that has each map as an array 
    -cellClick, the event to change the state of the map
    -setWhichState, to know which state to change*/
function Map({zone, mapGrid, cellClick, setWhichState}) {
    
    //Start a counter to dynamically add classes to each cell
    let counter = -1;
    //Makes a grid of X colums and Y rows, depending on the map
    let columns = zone.mapGrid[0];
    let rows = zone.mapGrid[1];
    const mapStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(' + columns + ', 60px)',
        gridTemplateRows: 'repeat(' + rows + ', 30px)',
    }

    //event for dragover
    function dragover(e) {
        e.preventDefault();
    }

    //event for dropped
    function dropped(e, setWhichState, whichZone) {
        e.preventDefault();
        let data = e.dataTransfer.getData("text");
        let cellIndex = +e.target.classList[0];
        let newMapContent = [...whichZone.mapContent];
        newMapContent[cellIndex][0] = data;
        setWhichState({mapContent: newMapContent});
    }

    //function to change image on cell based on a letter
    function iconInCell(letter) {
        let returnValue;
        switch(letter) {
            case 'c': returnValue = chest;
            break;
            case 'g': returnValue = grail;
            break;
            default: returnValue = '';
            break;
        }
        return returnValue;
    }

    return (
        <div style={mapStyle}>
            { mapGrid.map(elem => {
                if (elem === 'm') {
                    counter++;
                    return  <div className={`${counter} mapCell`} onClick={(e) => cellClick(e, setWhichState, zone)} 
                                                                  onDragOver={(e) => dragover(e)}
                                                                  onDrop={(e) => dropped(e, setWhichState, zone)}>
                                {(zone.mapContent[counter][0] !== '') && <div className={`${counter} aligncenter`}>
                                     <img className={counter} src={iconInCell(zone.mapContent[counter][0])} alt=''/>
                                </div>}
                                <div className={counter}>{zone.mapContent[counter][1]}</div>
                            </div>
                    } else {
                        return <div></div>
                    } 
                }) 
            }
        </div>
        
    )
};

export default Map;