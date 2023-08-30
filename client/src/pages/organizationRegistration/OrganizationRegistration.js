import './organizationRegistration.css'
import {useState} from "react";

function OrganizationRegistration(props) {
    const imageName = "Image.png";
    const [inputs, setInputs] = useState({});

    return (
        <div className="registrationForm">
            <label className="registrationLabel">Organization Name</label>
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
            <label className="registrationLabel">Organization Email</label>
            <input
                className="registrationInput"
                value={inputs?.email}
                onChange={(e) => setInputs({...inputs, ["email"]: e.target.value})}
                type="text"
            />
            <label className="registrationLabel">Description</label>
            <textarea
                className="registrationTextArea"
                value={inputs?.description}
                onChange={(e) => setInputs({...inputs, ["description"]: e.target.value})}
            />
            <label className="registrationLabel">Contact and Links(optional)</label>
            <input
                className="registrationInput"
                type="text"
                value={inputs?.contact}
                onChange={(e) => setInputs({...inputs, ["contact"]: e.target.value})}
            />
            <label className="registrationLabel">+ Add Another</label>
            <div className="registrationBtns">
                <button
                    className="registrationCloseBtn"
                >CLOSE</button><button
                    className="registrationRegisterBtn"
                >REGISTER</button>
            </div>
        </div>
    );
}

export default OrganizationRegistration;