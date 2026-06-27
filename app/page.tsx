"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { studentSchema, type StudentData } from "./data/studentSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormCard from "./components/FormCard";
import StudentCard from "./components/studentcard";
import students from "./data/Studentlist";

export default function Home() {

  const [Studentlist, setStudents] = useState(students);

  function addstudent(studentData: StudentData) {
    const newId = Studentlist.length + 1;
    const newStudent = {
      id: newId,
      firstName: studentData.firstName,
      lastName: studentData.lastName,
      dob: studentData.dob,
      grade: Number(studentData.grade),
    };
    setStudents([...Studentlist, newStudent]);
  }


  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<StudentData>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: "",
      grade: "",
    },
  });


  return (
    <>
      <div className="bg-black-50 min-h-screen">
        <main className="max-w-4xl p-8">
          <div className="border-b border-black-400 pb-2 mb-4">
            <h1 className="font-bold text-black-800">List of Students</h1>
          </div>

          <div className="flex flex-row flex-wrap">
            {Studentlist.map((student) => (
              <StudentCard
                key={student.id}
                firstName={student.firstName}
                lastName={student.lastName}
                dob={student.dob}
                grade={student.grade}
              />
            ))}
          </div>

          <div className="border-b border-black-400 pb-2 mb-4">
            <h2 className="font-bold text-black-800">Register a New Student</h2>
            <form
              onSubmit={handleSubmit(addstudent)}
              className="rounded-lg border border-gray-300 p-2 mt-2"
            >
              <FormCard label="First Name" error={errors.firstName?.message}>
                <input
                  className="bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-300 text-sm text-gray-900"
                  {...register("firstName")}
                />
              </FormCard>

              <FormCard label="Last Name" error={errors.lastName?.message}>
                <input
                  className="bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-300 text-sm text-gray-900"
                  {...register("lastName")}
                />
              </FormCard>

              <FormCard label="Date of Birth" error={errors.dob?.message}>
                <input
                  className="bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-300 text-sm text-gray-900"
                  {...register("dob")}
                />
              </FormCard>

              <FormCard label="Grade" error={errors.grade?.message}>
                <input
                  className="bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-300 text-sm text-gray-900"
                  {...register("grade")}
                />
              </FormCard>

              <div className="flex flex-col gap-2 items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onSubmit={handleSubmit(addstudent)}
                  className="bg-gray-500 text-sm text-gray-100 font-semibold border border-slate-100 rounded-lg px-6 py-2 mt-1 hover:bg-slate-600"
                >
                  Add Student
                </button>

                {isSubmitSuccessful && <p className="text-lg text-gray-800 font-bold">Student Added ✅</p>}
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
