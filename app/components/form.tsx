import React from 'react';
import {useState} from "react";
export default function formdisplay()
{
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [dob, setDob] = useState("");
    const [grade, setGrade] = useState("");
    const [error, setError] = useState("");

    function submit()
    {
        if(!)
    }


    {/**Clear after submit form */}
    setFirst("");
    setLast("");
    setDob("");
    setGrade("");
    return(
        <div>
            <form>
                
                <label htmlFor="first">
                    First 
                </label>
                <input type="text" name="first"/>

                <label htmlFor="last">
                    Last
                </label>
                <input type ="text" name="last"/>
           


                <label htmlFor="dob">
                    Date of Birth. Please input the in the format of YYYY-MM-DD.
                </label>
                <input type="text" name="dob"/>
                



                <label htmlFor="grade">
                    Current Grade
                </label>
                <input type="text" name="grade"/>
              


                <button>
                    Submit
                </button>

            </form>
        </div>
    )
}

