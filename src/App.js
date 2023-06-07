import './App.css';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import React, {useState} from 'react';
import Note from './components/Note';



function App() {

const [notes, setNotes] = useState([]);

function addNote(newNote) {
  setNotes(prevNotes => {
    return [...prevNotes, newNote];
  })
  console.log(notes);
}
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote}/>
        {notes.map( (noteItem, index) => {
            return (
            <Note 
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
            />);
          })
          };
      
    </div>
  );
}

export default App;
