"use client";

import React from "react";

interface FiltersProps {
  setStatus: (status: string) => void; 
  setGender: (gender: string) => void;
  setSpecies: (species: string) => void;
  setPageNumber: (page: number) => void;
}

export default function Filters({
  setStatus,
  setGender,
  setSpecies,
  setPageNumber,
}: FiltersProps) {
  const statuses = ["Alive", "Dead", "Unknown"];
  const genders = ["Female", "Male", "Genderless", "Unknown"];
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  const handleFilter = (
    filterType: "status" | "gender" | "species", 
    value: string
  ) => {
    setPageNumber(1);
    switch (filterType) {
      case "status":
        setStatus(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "species":
        setSpecies(value);
        break;
    }
  };

  return (
    <div className="accordion" id="filterAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#statusCollapse"
          >
            Status
          </button>
        </h2>
        <div
          id="statusCollapse"
          className="accordion-collapse collapse show"
          data-bs-parent="#filterAccordion"
        >
          <div className="accordion-body">
            {statuses.map((status, index) => (
              <div key={index} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  id={`status-${status}`} 
                  onChange={() => handleFilter("status", status)} 
                />
                <label
                  className="form-check-label"
                  htmlFor={`status-${status}`} 
                >
                  {status}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#genderCollapse"
          >
            Gender
          </button>
        </h2>
        <div
          id="genderCollapse"
          className="accordion-collapse collapse"
          data-bs-parent="#filterAccordion"
        >
          <div className="accordion-body">
            {genders.map((gender, index) => (
              <div key={index} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id={`gender-${gender}`}
                  onChange={() => handleFilter("gender", gender)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`gender-${gender}`}
                >
                  {gender}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#speciesCollapse"
          >
            Species
          </button>
        </h2>
        <div
          id="speciesCollapse"
          className="accordion-collapse collapse"
          data-bs-parent="#filterAccordion"
        >
          <div className="accordion-body">
            {species.map((specie, index) => (
              <div key={index} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="species"
                  id={`species-${specie}`}
                  onChange={() => handleFilter("species", specie)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`species-${specie}`}
                >
                  {specie}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
