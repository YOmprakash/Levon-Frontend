import { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('https://levon-backend-6dx2.onrender.com/api/students');
        if (Array.isArray(response.data)) {
          setStudents(response.data);
        } else {
          console.error('API response is not an array:', response.data);
          setStudents([]);
        }
      } catch (error) {
        console.error('Error fetching students:', error);
        setStudents([]);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className="mt-8 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Student List</h2>
      {students.length === 0 ? (
        <p className="text-gray-600 text-center">No students found.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <li
              key={student._id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-start"
            >
              <div className="text-xl font-semibold text-gray-800 mb-2">{student.name}</div>
              <div className="text-gray-600 mb-4">Grade: {student.grade}</div>
              <button className="bg-teal-600 text-white px-4 py-2 rounded-md shadow hover:bg-teal-700 transition duration-300">
                View Details
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;
