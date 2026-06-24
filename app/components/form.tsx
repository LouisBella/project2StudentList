import React from 'react';
import {useState} from "react";
export default function Formdisplay()
{
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [dob, setDob] = useState("");
    const [grade, setGrade] = useState("");
    const [error, setError] = useState("");

    function submit()
    {
     
        if(typeof first !== "string" || !first.trim())
        {
            setError("First name required");
            return;
        }

        if(typeof last !== "string" || !last.trim())
        {
            setError("Last name required");
            return;
        }

        if (!dob.match(/^\d{4}-\d{2}-\d{2}$/)) 
        {
            setError("Date of birth must be in YYYY-MM-DD format.");
            return;
        }

        if(typeof grade !== "number" || grade <= 0 || grade > 12)
        {
            setError("Grade required");
            return;
        }
    }


   
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

