import React, { useState, useEffect } from "react";

console.clear()

export default function User(props) {
    //track state of the toggle
    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {
        console.log(isToggled);
    }, [isToggled]);
    
    return ( 
        <li>
            <img src={props.data.picture.large} alt={props.data.name.first} />
            <h4>{props.data.name.first}{props.data.name.last}</h4>
            <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
            {isToggled && (
                <>
                    <p>Adress: {props.data.location.street.number}, {props.data.location.street.name},
                        {props.data.location.city}, 
                        {props.data.location.country}
                    </p>
                    <p>Email: {props.data.email}</p>
                    <p>Phone: {props.data.phone}</p>
                    <p>DOB: {props.data.dob.date}</p>
                </>
            )}
        </li>
    )
}



