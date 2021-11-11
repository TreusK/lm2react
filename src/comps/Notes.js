import './Notes.css';

/*Note needs:
    -zone, to know in which map we are
    -setWhichState, to know which state to modify 
    -noteClick, the event to change a note on click */
function Notes({zone, setWhichState, noteClick}) {
    function handleAddNewNote(e) {
        let newNotesArr = [...zone.notesContent];
        newNotesArr.push('New note');
        setWhichState({notesContent: newNotesArr});
    }

    return (
        <div>
            <ul>
                {zone.notesContent.map((note, index) => <li onClick={(e) => noteClick(e, setWhichState, zone)} className={index}>{note}</li>)}
            </ul>
            <div className='plus' onClick={handleAddNewNote}>+</div>
        </div>
    );
}

export default Notes;