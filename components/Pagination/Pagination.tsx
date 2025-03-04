"use client";

import React from "react";

interface PaginationProps {
  info?: {
    pages: number;
  };
  pageNumber: number;
  setPageNumber: (page: number) => void;
}

export default function Pagination({
  info,
  pageNumber,
  setPageNumber,
}: PaginationProps) {
  if (!info?.pages) return null;

  const prev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };

  const next = () => {
    if (pageNumber === info.pages) return;
    setPageNumber(pageNumber + 1);
  };

  return (
    <div className="d-flex justify-content-center gap-3 my-5">
      <button
        onClick={prev}
        disabled={pageNumber === 1}
        className="btn btn-primary"
      >
        Prev
      </button>
      <button
        onClick={next}
        disabled={pageNumber === info.pages}
        className="btn btn-primary"
      >
        Next
      </button>
    </div>
  );
}
