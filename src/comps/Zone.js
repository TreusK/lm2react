import './Zone.css';

//Components
import Map from './Map';
import Notes from './Notes';

/*Zone needs:
    -zone, to know in which map we are
    -mapGrid, the object that has each map as an array
    -cellClick, event function for the Map component
    -setWhichState, to know which state to modify */
function Zone({zone, mapGrid, cellClick, setWhichState}) {
    return(
        <div>
            <h1>{zone.zoneName}</h1>
            <Map zone={zone} mapGrid={mapGrid} cellClick={cellClick} setWhichState={setWhichState}/>
            <Notes zone={zone}/>
        </div>
    )
}

export default Zone;