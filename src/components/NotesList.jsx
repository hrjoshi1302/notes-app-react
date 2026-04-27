import React from 'react'
import NotesBox from './NotesBox'

// NotesList component renders all notes in a structured layout
const NotesList = (props) => {
  return (

    // Container for notes display section
    <div className='h-screen w-[86vh] bg-white m-5 p-6 rounded-2xl'>

      {/* Wrapper for heading and notes grid */}
      <div className='flex flex-col m-6 gap-20'>

        {/* Section heading */}
        <h2 className='text-4xl text-center'>Notes</h2>

        {/* Centered container for notes */}
        <div className='flex justify-center'>

          {/* Grid layout for individual note cards */}
          <div className='w-175 flex flex-wrap gap-10 justify-start'>

            {/* Dynamically render notes using map */}
            {props.old_data.map((data) => (

              // Each NotesBox represents a single note
              <NotesBox
                key={data.id}                     // Unique key for React rendering
                data={data}                      // Pass note data
                DeleteNotes={props.deletenotes}  // Pass delete handler
              />

            ))}

          </div>
        </div>

      </div>
    </div>
  )
}

export default NotesList