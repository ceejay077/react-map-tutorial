"use client";
import React, { useState, useEffect } from "react";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/students.json")
      .then((response) => response.json()) //// Parse the response body as JSON
      .then((data) => setStudents(data.students)) // Set the students state with the fetched data
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ul>
        {students.map((student) => (
          <li className="p-5">
            <div>Name: {student.name}</div>
            <div>Phone: {student.phone}</div>
            <div>Subject: {student.subject}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
