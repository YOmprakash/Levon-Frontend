import { useState } from "react";
import StudentList from "../components/StudentList";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentsPage = () => {
  const navigate = useNavigate();
  const [newStudent, setNewStudent] = useState({
    name: "",
    grade: "",
  });

  const handleCreateStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://levon-backend-6dx2.onrender.com/api/students", newStudent);
      setNewStudent({ name: "", grade: "" });
      
      
    } catch (error) {
      console.error("Error creating student:", error);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-teal-600 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        &larr; Back
      </button>
      <h1 className="mb-8 text-4xl font-bold text-center text-gray-900">
        Students Management
      </h1>
      <form
        onSubmit={handleCreateStudent}
        className="max-w-lg p-8 mx-auto space-y-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-gray-800">
          Add New Student
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) =>
              setNewStudent({ ...newStudent, name: e.target.value })
            }
            className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="text"
            placeholder="Grade"
            value={newStudent.grade}
            onChange={(e) =>
              setNewStudent({ ...newStudent, grade: e.target.value })
            }
            className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 text-white bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          Add Student
        </button>
      </form>
      <div className="mt-12">
        <StudentList />
      </div>
    </div>
  );
};

export default StudentsPage;
