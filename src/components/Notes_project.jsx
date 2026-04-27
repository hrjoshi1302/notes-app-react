import React from 'react'
import { useState } from 'react'

import NoteForm from './NoteForm'
import NotesList from './NotesList'
import { json_data } from '../data/notesData'

// Notes_project manages notes state and coordinates child components
const Notes_project = () => {

  // State to store all notes (initialized with default data)
  const [data, setdata] = useState(json_data)

  // Function to delete a note based on its id
  function deletenotes(id) {
    setdata(prev => prev.filter(note => note.id !== id))
  }

  return (
    // Main container for the Notes application
    <div className='h-screen w-full'>

      {/* Layout container for input (Leftbox) and display (Rightbox) */}
      <div className='flex flex-wrap justify-center bg-[#ededed] m-10 gap-5 rounded-xl'>

        {/* Leftbox: handles adding new notes */}
        <NoteForm add_on_old_data={setdata} />

        {/* Rightbox: displays notes and handles delete functionality */}
        <NotesList old_data={data} deletenotes={deletenotes} />

      </div>
    </div>
  )
}

export default Notes_project


