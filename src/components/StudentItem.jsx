import React from 'react';
import PropTypes from 'prop-types';

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

function StudentItem(props) {
  const { match } = props;
  const { params } = match;
  const { idStudent } = params;
  const id = parseInt(idStudent, 10);
  const student = students.find((s) => s.id === id);
  const { firstName, lastName } = student;
  return (
    <div className="StudentItem">
      <div>
        <span>Id:</span>
        <span>{id}</span>
      </div>
      <div>
        <span>First name:</span>
        <span>{firstName}</span>
      </div>
      <div>
        <span>Last name:</span>
        <span>{lastName}</span>
      </div>
    </div>
  );
}

StudentItem.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      idStudent: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default StudentItem;
