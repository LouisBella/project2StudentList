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

    const containerStyle = "w-full bg-gray-100 p-4 border border-black rounded-lg shadow-md";
    const formStyle = "flex flex-col";
    const labelStyle = "font-semibold text-black mt-6 mb-1";
    const inputStyle = "border border-gray-400 rounded p-3";
    const buttonStyle = "bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600";


    return (
        <div className={containerStyle}>
            {error ? <p style={{ color: "red" }}>{error}</p> : null}
            <form className={formStyle}>
                <label htmlFor="first" className={labelStyle}>
                    First
                </label>
                <input type="text" name="first" value={first} className={inputStyle} onChange={(e) => setFirst(e.target.value)} />


                <label htmlFor="last" className={labelStyle}>
                    Last
                </label>
                <input type="text" name="last" value={last} className={inputStyle} onChange={(e) => setLast(e.target.value)} />



                <label htmlFor="dob" className={labelStyle}>
                    Date of Birth. Please input the in the format of YYYY-MM-DD.
                </label>
                <input type="text" name="dob" value={birth} className={inputStyle} onChange={(e) => setDob(e.target.value)} />




                <label htmlFor="grade" className={labelStyle}>
                    Current Grade
                </label>
                <input type="text" name="grade" value={gradenum} className={inputStyle} onChange={(e) => setGrade(e.target.value)} />




                <button type="button" onClick={submit} className={buttonStyle}>
                    Submit
                </button>

            </form>
        </div>
    )
}

