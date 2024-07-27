import React from "react";

// eslint-disable-next-line react/prop-types
const Dropdown = ({ options, selected, onSelectedChange }) => {
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <li
        key={option.value}
        onClick={() => {
          onSelectedChange(option);
        }}
        className="dropdown-item"
      >
        {option.label}
      </li>
    );
  });

  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-primary dropdown-toggle"
        type="button"
        id="dropdownMenu"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selected.label}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
        {renderedOptions}
      </ul>
    </div>
  );
};

export default Dropdown;
