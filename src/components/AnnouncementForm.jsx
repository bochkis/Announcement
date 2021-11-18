import React, { useState } from "react"

const AnnouncementForm = ({create}) =>{
    const [announcement, setAnnouncement] = useState({title: '', body: ''})

    const addNewAnnouncement = (e) => {
        e.preventDefault()
        const newAnnouncement = {
            ...announcement, id: Date.now(), date: Date.now()
        }
        create(newAnnouncement)
        setAnnouncement({title: '', body: ''})
    }

    return(
        <form>
            <input className='my_input'
                value={announcement.title}
                onChange = {e => setAnnouncement({...announcement, title: e.target.value})}
                type= 'text'
                placeholder = 'Name announcement'
            
            />
            <input className='my_input'
                value={announcement.body}
                onChange = {e => setAnnouncement({...announcement, body: e.target.value})}
                type= 'text'
                placeholder = 'Body announcement'
            />

            <button onClick={addNewAnnouncement}>
                Додати оголошення
            </button>
        </form>
    )

}

export default AnnouncementForm;