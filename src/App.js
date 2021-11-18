import { useState } from 'react';
import './stules/App.css';
import AnnouncementList from './components/AnnouncementList';
import AnnouncementForm from './components/AnnouncementForm';

function App() {
  const [announcements, setAnnouncements] = useState([
    {id: 1, title: 'Продам Опель', body: 'Новий автомобіль', date: '02.03.2021'},
    {id: 2, title: 'Куплю собаку', body: 'Німецька вівчарка', date: '02.03.2021'},
    {id: 3, title: 'Піду на роботу', body: 'Шукаю роботу програмістом, без досвіду роботи. Мій телефон 095-70-31-781 Роман', date: '02.03.2021'},
  ])

    const createAnnouncement = (newAnnouncement) =>{
      setAnnouncements( [...announcements, newAnnouncement])
    }

    const removeAnnouncement = (announcement) =>{
      setAnnouncements(announcements.filter(ann => ann.id !== announcement.id))
    }

    const updateAnnouncement = (newAnnouncement)=>{
      for(let a=0; a<announcements.length; a+=1){
        if(announcements[a].id === newAnnouncement.id){
          announcements[a].title = newAnnouncement.title
          announcements[a].body = newAnnouncement.body
        }
      }
    }


  return (
    <div className='App'>
      <AnnouncementForm create={createAnnouncement}/>
      <h1>Оголошення</h1> 
      {announcements.map((announcement)=>
        <AnnouncementList announcement={announcement} key={announcement.id} remove={removeAnnouncement} update={updateAnnouncement}/>
      )}
    </div>
  );
}

export default App;
