import './Notes.css';

function Notes({notes, changeNote, whichMapNotes, addNewNote}) {
    return (
        <div>
            <ul>
                {notes.map((note, index) => <li className={whichMapNotes + ' ' + index} onClick={(e) => changeNote(e)}>{note}</li>)}
            </ul>
            <div className='plus' onClick={() => addNewNote(whichMapNotes)}>+</div> 
        </div>
    );
}

export default Notes;