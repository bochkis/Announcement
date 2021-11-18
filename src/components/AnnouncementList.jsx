import React,{ useState } from "react";
import AnnouncementEdit from "./AnnouncementEdit";


const AnnouncementList = (props) => {

    const [edit, setEdit] = useState( true )

    const funk = () =>{
        setEdit( !edit )
    }


    return(
        <div>
            {   edit ? (
                <div className='announcement'>
                <div className='announcement_content'>
                    <h4>{props.announcement.title}</h4>
                    <div>{props.announcement.body}</div>
                    <div>{props.announcement.date}</div>
                </div>
                <div className='announcement_dtns'>
                    <button onClick={() => props.remove(props.announcement)}>Delete</button>
                    <button onClick={funk}>Edit</button>
                    
                </div>
            </div>) : ( 
                <AnnouncementEdit title={props.announcement.title} body={props.announcement.body} 
                update={props.update} id={props.announcement.id} funk={funk}>

                </AnnouncementEdit>
             )
            }
            
        </div>
        
    )
}

export default AnnouncementList


