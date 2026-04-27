import React  from 'react'
import styles from './NotesBox.module.css'

// NotesBox component renders an individual note card
const NotesBox = (props) => {

        // Function to remove the current note using its unique id
        function removenote() {
                props.DeleteNotes(props.data.id)
        }

        return (

                // Card container with background styling
                <div className="flex flex-col bg-cover bg-center w-[20vh] h-[30vh] bg-[url('https://images.vexels.com/media/users/3/311948/isolated/preview/f04bbb6376417af9917ca792804ef040-notebook-page-for-taking-notes.png')] rounded-3xl">

                        {/* Note title section */}
                        <div className='flex text-black justify-center p-3 text-2xl'>
                                {props.data.Title}
                        </div>

                        {/* Divider between title and content */}
                        <hr className='text-black font-bold'></hr>

                        {/* Scrollable note content area */}
                        <div
                                id={styles.note_content}
                                className='h-[16vh] overflow-y-auto mx-4 my-2 text-black font-light text-xl'
                        >
                                {props.data.Content}
                        </div>

                        {/* Delete button to remove note */}
                        <div
                                onClick={removenote}
                                className='bg-red-400 p-1 text-white flex justify-center mx-3 my-4 rounded-2xl font-bold cursor-default'
                        >
                                Delete
                        </div>

                </div>


        )
}

export default NotesBox