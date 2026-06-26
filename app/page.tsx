"use client";
import { useState } from "react";
import Navbar from "./components/navbar";
import StudentCard from "./components/studentcard";
import FormDisplay from "./components/form";
import Footer from "./components/footer";
import students from "./Studentlist";


export default function Home() {
  const [Studentlist, setStudents] = useState(students);

  function addstudent() {

  }
  return (
    <>
    <div className="bg-black-50 min-h-screen">
      <main className="max-w-4xl p-8">
        <div className="border-b border-black-400 pb-2 mb-4">
          <h1 className="font-bold text-black-800">List of Students</h1>
        </div>
        <div className="flex flex-col gap-15">
          <div className="felx flex-col gap-4">
            {Studentlist.map((student) => (
            <StudentCard key={student.id} first={student.firstName} last={student.lastName} dob={student.dob} grade={student.grade} />
             ))}
          </div>
          
        </div>
        <div className="border-b border-black-400 pb-2 mb-4">
          <h2 className="font-bold text-black-800">Register a New Student</h2>
         <FormDisplay addstudent={addstudent} />
        </div>
      </main>
    </div>
      
    </>
  );
}
