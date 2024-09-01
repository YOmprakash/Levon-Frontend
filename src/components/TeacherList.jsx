import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/teachers');
        setTeachers(response.data);
       
      } catch (error) {
        console.error(error);
        setError('Failed to fetch teachers');
      } finally {
        setLoading(false);
      }
    };
    fetchTeachers();
  }, []);

  if (loading) return <p className="text-gray-600 text-center">Loading...</p>;

  if (error) return <p className="text-red-600 text-center">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto px-4">
     <h2 className="text-3xl font-bold text-gray-900 mb-6">Teachers List</h2>
      {teachers.length === 0 ? (
        <p className="text-gray-600 text-center">No teachers available.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {teachers.map((teacher) => (
            <li
              key={teacher._id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col"
            >
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{teacher.name}</h3>
                <p className="text-gray-600">Subject: {teacher.subject}</p>
              </div>
              <button className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
                View Details
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TeacherList;
