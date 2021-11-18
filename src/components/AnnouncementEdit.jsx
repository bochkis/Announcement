import React, { useState } from "react"

const AnnouncementEdit = (props) =>{
    const [announcement, setAnnouncement] = useState({title: ' ', body: ' '})

    const updateAnnouncement = (e) => {
        e.preventDefault()
        const newAnnouncement = {
            ...announcement, id: props.id
        }
        props.update(newAnnouncement)
        setAnnouncement({title: ' ', body: ' '})
        props.funk()
    }

    return(
        <form className='announcement'>
            <div>

            <input className='my_input_edit'
                defaultValue={props.title}
                onChange = {e => setAnnouncement({...announcement, title: e.target.value})}
                type= 'text'
            />
            <input className='my_input_edit'
                defaultValue={props.body}
                onChange = {e => setAnnouncement({...announcement, body: e.target.value})}
                type= 'text'
            />
            </div>
            <button onClick={updateAnnouncement}>
                Додати оголошення
            </button>
        </form>
    )

}

export default AnnouncementEdit;