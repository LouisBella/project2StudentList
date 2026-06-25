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
      <Navbar />
      <main>
        {Studentlist.map((student) => (
          <StudentCard key={student.id} first={student.firstName} last={student.lastName} dob={student.dob} grade={student.grade} />
        ))}
        <FormDisplay addstudent={addstudent} />
      </main>
      <Footer />
    </>
  );
}
