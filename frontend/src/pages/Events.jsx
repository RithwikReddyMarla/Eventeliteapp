import React, { useState } from 'react';
import { Wedding } from './Wedding'; 
import {BirthdayParties} from './BirthdayParties'; 
import {Reception} from './Reception'; 
import {Haldi} from './Haldi';
import {Sangeeth} from './Sangeeth';
import {BanquetHalls} from './BanquetHalls'; 
import '../styles/Events.css'; 

const eventTypes = [
    { name: "Weddings" },
    { name: "Birthday Parties" },
    { name: "Receptions" },
    { name: "Banquet Halls" },
    { name: "Haldi" },
    {name: "Sangeet"},
];

export function Events() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="events-container">
            <div className="events-header-box">
                <h1>Explore Our Events</h1>
                <p>Find the perfect setup for your special occasion, from traditional</p><br/>
                <p> ceremonies to modern celebrations</p>
            </div>
            <div className="event-types">
                {eventTypes.map((event, idx) => (
                    <button
                        key={event.name}
                        onClick={() => setSelected(event.name)}
                        className="event-type-btn"
                    >
                        {event.name}
                    </button>
                ))}
            </div>
            {selected === "Weddings" && <Wedding />}
            {selected==='Birthday Parties' && <BirthdayParties/>}
            {selected==='Receptions' && <Reception/>}
            {selected==='Haldi' && <Haldi/>}
            {selected==='Sangeet' && <Sangeeth/>}
            {selected === "Banquet Halls" && <BanquetHalls />}
        </div>
    );
}