import React from 'react';
import { Link } from 'react-router-dom';

const students = [
  {
    id: 135143,
    firstName: 'Michel',
    lastName: 'Durand',
  },
  {
    id: 264534,
    firstName: 'Isabelle',
    lastName: 'Dupont',
  },
  {
    id: 36468468,
    firstName: 'André',
    lastName: 'Dupuis',
  },
];

function StudentList() {
  return (
    <main>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link to={`/students/${student.id}`}>{student.id}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default StudentList;
