import './Notes.css';

function Notes({zone}) {
    function addThingy(e) {
        console.log(e.target);
    }

    return (
        <div>
            <ul>
                {zone.notesContent.map((note, index) => <li className={index}>{note}</li>)}
            </ul>
            <div className='plus' onClick={addThingy}>+</div>
        </div>
    );
}

export default Notes;