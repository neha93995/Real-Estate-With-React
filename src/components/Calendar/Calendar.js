import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import './Calendar.css';
import interactionPlugin from "@fullcalendar/interaction";
export default function Calendar() {

  //---------------------states----------

  const [event, setEvent] = useState([
    { title: '1', start: '2022-08-20', backgroundColor: 'red' },
    { title: '2', start: '2022-08-30', backgroundColor: 'blue' },
    { title: '3', start: '2022-08-30', backgroundColor: 'green' },
    { title: '7', start: '2022-09-06', backgroundColor: 'red' },
  ]);
  const [addEventDetails, setAddEventDetails] = useState({
    title: '',
    start: '',
    backgroundColor: ''
  })
  const [show, setShow] = useState(false);
  const [showPopup, setShowPopup] = useState(false);



  //-------------------functions---------------



  const clickDate = (e) => {
    setAddEventDetails({ ...addEventDetails, start: e.dateStr });

    const toDay = new Date();

    const todayDate = `${toDay.getFullYear()}-${toDay.getMonth() + 1}-0${toDay.getDate()}`



    console.log(todayDate, e.dateStr)

    if (e.dateStr >= todayDate) {
      var blur = document.getElementById('blurCalendar');
      blur.classList.toggle('active');
      var popup = document.getElementById('popup');
      popup.classList.toggle('active')
    }
  }

  const handleEventContent = (eventInfo) => {
    console.log('-------------------', eventInfo)
    return (
      <div className='relative eventDiv'>

        <div className='' style={{ backgroundColor: eventInfo.event.customColor }}>
          {/* <b>{eventInfo.timeText}</b> */}
          <i> {eventInfo.event.title}</i>
          <button className='absolute top-0 right-1' onClick={() => { handleRemoveClick(eventInfo) }}>❌</button>
        </div>
        <div className='eventPopup absolute bg-purple-700 w-44 z-50 p-2 h-24 flex-wrap bottom-14 -right-20 text-center rounded-xl'>
          
          <div className='text-lg my-3'>{eventInfo.event.title}</div>
          
          {
            event.map((item,index)=>{
              return(
                <div key={index}>
                {
                  item.title===eventInfo.event.title?
                  <div className='text-xs'>
                    <span>startDate: {item.start}</span>
                    {/* <span>endDate: {item.end}</span> */}
                  </div>
                  :''
                }
                </div>
              )
            })
          }
        

        </div>

      </div>
    )
  }


  const handleRemoveClick = (e) => {
    e.event.remove();
    const a = event.filter((item, index) => {
      return item.title !== e.event.title;
    })
    setEvent(a)

  }



  const addEvent = () => {

    setShow(!show);
    setAddEventDetails({ ...addEventDetails, title: '' });
    const date = [...event, addEventDetails]
    setEvent(date);
    cancleAddEvent();
  }

  const cancleAddEvent = () => {
    var blur = document.getElementById('blurCalendar');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
  }

  const handleEventClick = (e) => {
    console.log('handleEventClick----', e);
    //  document.getElementsByClassName('eventPopup').classList.toggle('avtivePopup')
    setShowPopup(!showPopup);
    document.getElementById('eventPopupId').style.top = `${e.jsEvent.clientX + 100}px`;

  }



  return (
    <div >

      {/* ----------------------------------full calendar------------------------ */}

      <div className='my-20 transition duration-150 ' id='blurCalendar'>
        calendar
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"

          today={(e) => { console.log(e) }}

          //--------- header tool bar -------------
          headerToolbar={{
            left: 'prev,next,today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
          }}
          // -------------event click------- use when we click on any event 
          // eventClick={handleEventClick}

          // ------------events-------------> show events 

          events={event}

          // ----------add events---------***

          eventAdd={
            function (arg) {
              alert('add event')

            }
          }

          // --------event content----------->show event content 

          eventContent={handleEventContent}

          //-----------all day class name---------*******

          allDayClassNames='calendar'

          //--------weekends--------*****

          weekends='true'

          //---------date click--------->work when any date clicks
          dateClick={clickDate}

          //-------------event click-------------
          eventClick={handleEventClick}

          // selectable={true}

          //---------------for edit the event -------------
          editable={true}

          //-------event drop--------------

          eventDrop={function (e) {
            console.log('drag', e);
            alert(e.event.title + " was droped to " + e.event.start.toISOString());
            const confirmbox = window.confirm('are you sure about this change ')
            if (confirmbox === false) {
              e.revert();
            }

          }}

          eventBackgroundColor


        />
        {/* -----------------for add event --------------------- */}


      </div>
      <div id='popup' className=' bg-blue-800 text-white w-80 h-52 rounded-lg p-5 border border-slate-200'>
        <div className='relative'>
          <p className='p-3 underlin text-center'>Add event</p>
          <p>{addEventDetails.start}</p>
          <label htmlFor='event'>event:</label>
          <input type='text' id='event' placeholder='enter event' className='bg-transparent  mx-3 border-b outline-none' onChange={(e) => { setAddEventDetails({ ...addEventDetails, title: e.target.value }) }} /><br />
          <label htmlFor='color'>color:</label>
          <input type='color' id='color' className='rounded-full w-8 h-6 border-none mx-3  bg-transparent' onChange={(e) => { setAddEventDetails({ ...addEventDetails, color: e.target.value }) }} /><br />
          <div className='text-center'> <button onClick={addEvent} className='hover:bg-blue-500 rounded-xl my-5 px-5 border bg-blue-800'>Add</button></div>
          <button onClick={cancleAddEvent} className='absolute top-2 right-2' >❌</button>
        </div>
      </div>

      {/* --------------------------for event details------------------- */}


      <div id='eventPopupId' className={showPopup ? 'eventPopup ' : "eventPopup avtivePopup"}>
        <div className='bg-blue-800 p-3 text-center'>
          <p>title</p>
          <div>
            <span></span>
            <span></span>
          </div>

        </div>
      </div>

    </div>
  )
}
