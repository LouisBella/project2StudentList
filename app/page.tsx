"use client";
import { useState } from "react";
import Navbar from "./components/navbar";
import StudentCard from "./components/studentcard";
import FormDisplay from "./components/form";
import Footer from "./components/footer";
import students from "./Studentlist";


export default function Home() {
  const [Studentlist, setStudents] = useState(students);

  function addstudent(studentData: { first: string; last: string; dob: string; grade: number }) {

    const newId = Studentlist.length + 1;
    const newStudent = {
      id: newId,
      firstName: studentData.first,
      lastName: studentData.last,
      dob: studentData.dob,
      grade: studentData.grade,
    };
    setStudents([...Studentlist, newStudent]);
  }


  return (
    <>
      <div className="bg-black-50 min-h-screen">
        <main className="max-w-4xl p-8">
          <h1 className="font-bold text-black-800 underline-offset-4 underline mb-4">List of Students</h1>
          <div className="flex flex-row gap-4">
            {Studentlist.map((student) => (
              <StudentCard key={student.id} first={student.firstName} last={student.lastName} dob={student.dob} grade={student.grade} />
            ))}

          </div>
          <h2 className="font-bold text-black-800 mt-4">Register a New Student</h2>
          <FormDisplay addstudent={addstudent} />
        </main>
      </div>

    </>
  );
}
