export default function StudentCard({ first, last, dob, grade }:
    {
        first: string;
        last: string;
        dob: string;
        grade: number;
    }) {
    return (
        <div>
            <p>First Name: {first}</p>
            <p>Last Name: {last}</p>
            <p>Date of Birth: {dob}</p>
            <p>Grade: {grade}</p>
        </div>
    );
}



