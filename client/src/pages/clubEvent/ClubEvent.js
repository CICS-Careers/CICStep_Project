import './clubEvent.css'
import image from '../../assets/event_template_image.png'
import {useState} from "react";

function ClubEvent(props) {
    const [info, setInfo] = useState(
        {
            event: "EVENT NAME",
            organization: "Organization Name",
            date: "09/28/2023",
            time: "11:30-15:30",
            location: "Location",
            description: "Event Description. Gotta make this long winded I guess. Talk, talk, pause, unpause break off, stare, resume conservation, lookn on in horror, slap tendril away, run and don't look back.",
            contactInfo: ["Contact Info 1", "Contact Info 2"]
        }
    );

    return (
        <div
            className="clubEventContainer"
        >
            <img
                className="img"
                src={image} /> <br/>
            <div className="contentContainer">
            <div
                className="event"
            >{info?.event}</div>
            <div
                className="organization"
            >{info?.organization}</div>
            <div
                className="dateTimeRow"
            >
                <span className="date">{info?.date}</span>
                <span className="time">{info?.time}</span>
            </div>
            <div className="location">{info?.location}</div>
            <div className="description">{info.description}</div>
            <div className="contactInfo">
                {
                    info?.contactInfo.map((el) => <div
                    className="contactInfoEl">{el}</div>)
                }

            </div>

            <button className="registerBtn">
                REGISTER
            </button>

            </div>
        </div>
    );
}

export default ClubEvent;