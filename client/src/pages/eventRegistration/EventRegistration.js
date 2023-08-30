import './eventRegistration.css'
import {useState} from "react";

function EventRegistration(props) {
    const imageName = "Image.png"
    const [inputs, setInputs] = useState({});

    return (
        <div className="registrationForm">
            <label className="registrationLabel">Event Name</label>
            <input
                className="registrationInput"
                value={inputs?.event}
                onChange={(e) => setInputs({...inputs, ["event"]: e.target.value})}
                type="text"
            />
            <label className="registrationLabel">Organization Name(optional)</label>
            <input
                className="registrationInput"
                value={inputs?.organization}
                onChange={(e) => setInputs({...inputs, ["organization"]: e.target.value})}
                type="text"
            />
            <label className="registrationLabel">Cover Image</label>
            <div>
                <button
                    className="registrationChooseFileBtn"
                >Choose File...</button>
                <span
                    className="registrationFileName"
                >{imageName}</span>
            </div>
            <label className="registrationLabel">Date</label>
            <div className="registrationInputRow">
                <input
                    className="registrationInput"
                    type="text"
                />
                <span
                    className="registrationSpan"
                >[Icon]</span>
            </div>
            <label className="registrationLabel">Time</label>
            <div className="registrationInputRow">
                <input
                    className="registrationInput"
                    type="text"
                />
                <span
                    className="registrationSpan"
                >TO</span>
                <input
                    className="registrationInput"
                    type="text"
                />

            </div>
            <label className="registrationLabel">Location</label>
            <input
                className="registrationInput"
                value={inputs?.location}
                onChange={(e) => setInputs({...inputs, ["location"]: e.target.value})}
                type="text"
            />
            <label className="registrationLabel">Event Description</label>
            <textarea
                className="registrationTextArea"
                value={inputs?.description}
                onChange={(e) => setInputs({...inputs, ["description"]: e.target.value})}
            />
            <label className="registrationLabel">Contact and Links(optional)</label>
            <input
                className="registrationInput"
                value={inputs?.contact}
                onChange={(e) => setInputs({...inputs, ["contact"]: e.target.value})}
                type="text"
            />
            <label className="addAnother">+ Add Another</label>
            <div className="registrationBtns">
                <button
                    className="registrationCloseBtn"
                >CLOSE</button><button
                className="registrationRegisterBtn"
            >CREATE EVENT</button>
            </div>
        </div>
    );
}

export default EventRegistration;