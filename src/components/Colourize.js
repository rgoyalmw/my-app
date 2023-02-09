import { useState } from "react";
import React from "react";

const Colourize = () => {

    const [colour,setColour] = useState('Blue');
    const ChangeColour = () => {
        if (colour === 'Blue') setColour('pink')
        else setColour('Blue')
        console.log(`Colour changed to ${colour}`);

    }
    return (
        <div className="colourize">
            <div className="box" style={{backgroundColor: colour}}></div>
            <button onClick={ChangeColour}>Change Colour</button>
        </div>
    )
}

export default Colourize;