export default function StudentCard({ first, last, dob, grade }:
    {
        first: string;
        last: string;
        dob: string;
        grade: number;
    }) {


    const cardStyle = "bg-gray-100 p-4 border border-black rounded-lg shadow-md flex flex-col space-y-2 max-w-3xs";
    return (
        <div className={cardStyle}>
            <p>First Name: {first}</p>
            <p>Last Name: {last}</p>
            <p>Date of Birth: {dob}</p>
            <p>Grade: {grade}</p>
        </div>
    );
}



