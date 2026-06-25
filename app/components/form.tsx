import React from 'react';
import { useState } from "react";
export default function Formdisplay({ addstudent }: { addstudent: Function }) {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [birth, setDob] = useState("");
    const [gradenum, setGrade] = useState("");
    const [error, setError] = useState("");

    function submit() {

        if (typeof first !== "string" || !first.trim()) {
            setError("First name required");
            return;
        }

        if (typeof last !== "string" || !last.trim()) {
            setError("Last name required");
            return;
        }

        if (!birth.match(/^\d{4}-\d{2}-\d{2}$/)) {
            setError("Date of birth must be in YYYY-MM-DD format.");
            return;
        }

        const grade: number = Number(gradenum);
        if (isNaN(grade) || grade <= 0 || grade > 12) {
            setError("Grade required");
            return;
        }

        addstudent({ firstName: first, lastName: last, dob: birth, grade: grade })
        setFirst("");
        setLast("");
        setDob("");
        setGrade("");
    }
    return (
        <div>
            <form>

                <label htmlFor="first">
                    First
                </label>
                <input type="text" name="first" value={first} onChange={(e) => setFirst(e.target.value)} />

                <label htmlFor="last" >
                    Last
                </label>
                <input type="text" name="last" value={last} onChange={(e) => setLast(e.target.value)} />



                <label htmlFor="dob">
                    Date of Birth. Please input the in the format of YYYY-MM-DD.
                </label>
                <input type="text" name="dob" value={birth} onChange={(e) => setDob(e.target.value)} />




                <label htmlFor="grade">
                    Current Grade
                </label>
                <input type="text" name="grade" value={gradenum} onChange={(e) => setGrade(e.target.value)} />




                <button type="button" onClick={submit}>
                    Submit
                </button>

            </form>
        </div>
    )
}

