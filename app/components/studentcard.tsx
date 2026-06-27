export default function StudentCard({ firstName, lastName, dob, grade }:
    {
        firstName: string;
        lastName: string;
        dob: string;
        grade: number;
    }) {


    const cardStyle = "bg-gray-100 p-4 border border-black rounded-lg shadow-md flex-row flex-wrap m-2 max-w-3xs";
    return (
        <div className={cardStyle}>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Date of Birth: {dob}</p>
            <p>Grade: {grade}</p>
        </div>
    );
}



