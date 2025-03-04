"use client";

import React from "react";

interface SearchProps {
  setSearch: (search: string) => void;
  setPageNumber: (page: number) => void;
}

export default function Search({ setSearch, setPageNumber }: SearchProps) {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        style={{ color: "white" }}
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        type="text"
        className="form-control w-50"
      />
    </form>
  );
}
