import React, { useState } from 'react'

// Leftbox handles user input for creating new notes
const NoteForm = (props) => {

    // State for note title
    const [txt, settxt] = useState('')

    // State for note content
    const [txtarea, settxtarea] = useState('')

    // Handle form submission
    function onSubmit(e) {
        e.preventDefault()

        // Prevent empty note submission
        if (!txt.trim() || !txtarea.trim()) return

        // Add new note to existing data
        props.add_on_old_data((prev) => [
            ...prev,
            {
                id: Date.now(),
                Title: txt,
                Content: txtarea
            }
        ])

        // Clear input fields after submission
        settxt('')
        settxtarea('')
    }

    return (
        // Container for note creation form
        <div className='h-vh w-[65vh] bg-white m-5 p-6 rounded-2xl'>

            <div className='flex flex-col justify-center items-center gap-16'>

                {/* Heading */}
                <h2 className='text-4xl'>Create Notes</h2>

                {/* Form for adding notes */}
                <form onSubmit={onSubmit} className='flex flex-col text-3xl gap-10'>

                    {/* Title input */}
                    <input
                        value={txt}
                        onChange={(e) => settxt(e.target.value)}
                        type='text'
                        className='w-[50vh] border p-4 text-2xl rounded-2xl'
                        placeholder='Note Title'
                    />

                    {/* Content textarea */}
                    <textarea
                        value={txtarea}
                        onChange={(e) => settxtarea(e.target.value)}
                        className='w-[50vh] h-[20vh] border p-4 text-2xl rounded-2xl'
                        placeholder='Note Content...'
                    />

                    {/* Submit button */}
                    <div className='flex justify-center'>
                        <button
                            type='submit'
                            className='w-[30vh] bg-black text-white py-2 rounded-xl hover:opacity-80 transition'
                        >
                            Add
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NoteForm
