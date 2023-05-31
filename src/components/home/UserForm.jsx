import React, { useRef, useState } from 'react';
import './UserForm.css';

const UserForm = ({ onSendName }) => {
  const [nameValue, setNameValue] = useState('');
  const [nameError, setNameError] = useState(null);
  const hasInputAlreadyTouched = useRef(false);

  const handleChange = (e) => {
    const newNameValue = e.target.value;
    if (!hasInputAlreadyTouched.current) {
      hasInputAlreadyTouched.current = true;
    }

    if (newNameValue === '') setNameError('El nombre es requerido');
    else if (!/^[a-zA-Z ]{3,}$/.test(newNameValue))
      setNameError(
        `Solo letras, espacios y un minimo de 3 caracteres
      `,
      );
    else setNameError(null);

    setNameValue(newNameValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameError && hasInputAlreadyTouched.current) {
      onSendName(nameValue);
    }
  };
  return (
    <>
      <form className="header-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          value={nameValue}
          onChange={handleChange}
          placeholder="Floripondio"
        />
        <button type="submit" className="form-button">
          <span> Empezar </span>
        </button>
      </form>
      {Boolean(nameError) && (
        <p className="form-button--error">
          {' '}
          <span>
            <i className="fa-solid fa-triangle-exclamation"></i>
          </span>{' '}
          {nameError}
        </p>
      )}
    </>
  );
};

export default UserForm;
