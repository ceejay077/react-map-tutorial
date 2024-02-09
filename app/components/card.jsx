"use client";
import React, { useState, useEffect } from "react";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetching the student details from the JSON file (assuming it's stored locally)
    fetch("/students.json")
      .then((response) => response.json())
      .then((data) => setStudents(data.students))
      .catch((error) => console.error("Error fetching student data:", error));
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>Name:</strong> {student.name} <br />
            <strong>ID:</strong> {student.id} <br />
            <strong>Phone:</strong> {student.phone} <br />
            <strong>Subject:</strong> {student.subject} <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
