import './Colors.css';

function Colors() {
  return (
     <>
    <p>Drag and drop to change a cell color</p>
    <div className='dragColors'>
        <div draggable="true" className="base gray"></div>
        <div draggable="true" className="base indianred"></div>
        <div draggable="true" className="base lightblue"></div>
        <div draggable="true" className="base lightgreen"></div>
        <div draggable="true" className="base palegoldenrod"></div>
    </div>
    </>
  );
}

export default Colors;
