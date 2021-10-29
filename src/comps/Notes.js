import './Notes.css';

function Notes({notes, changeNote, whichMapNotes}) {
    return (
        <div>
            <ul>
                {notes.map((note, index) => <li className={whichMapNotes + ' ' + index} onClick={(e) => changeNote(e)}>{note}</li>)}
            </ul>
            <div>+</div> 
        </div>
    );
}

export default Notes;