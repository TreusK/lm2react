import './Map.css';

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

    return (
        <div style={mapStyle}>
            {mapGrid.map(elem => {
                if (elem === 'm') {
                    counter++;
                    return <div className={'mapCell ' + counter} onClick={(e) => cellClick(e, setWhichState, zone)}>{zone.mapContent[counter]}</div>
                } else {
                    return <div></div>
                }
            })}
        </div>
        
    )
};

export default Map;