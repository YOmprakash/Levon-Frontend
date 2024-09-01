import { useState } from "react";
import TeacherList from "../components/TeacherList";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TeachersPage = () => {
  const navigate = useNavigate();
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    subject: "",
  });

  const handleCreateTeacher = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://levon-backend-6dx2.onrender.com/api/teachers", newTeacher);
      setNewTeacher({
        name: "",
        subject: "",
      });
      
      
      // by calling a method from the TeacherList component if needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <button
        onClick={() => navigate(-1)} // Navigate back to the previous page
        className="mb-4 text-teal-600 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        &larr; Back
      </button>
      <h1 className="mb-8 text-4xl font-bold text-center text-gray-900">
        Manage Teachers
      </h1>
      <form
        onSubmit={handleCreateTeacher}
        className="max-w-lg p-8 mx-auto space-y-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-gray-800">
          Add New Teacher
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={newTeacher.name}
            onChange={(e) =>
              setNewTeacher({ ...newTeacher, name: e.target.value })
            }
            className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="text"
            placeholder="Subject"
            value={newTeacher.subject}
            onChange={(e) =>
              setNewTeacher({ ...newTeacher, subject: e.target.value })
            }
            className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 text-white bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          Add Teacher
        </button>
      </form>
      <div className="mt-12">
        <TeacherList />
      </div>
    </div>
  );
};

export default TeachersPage;
