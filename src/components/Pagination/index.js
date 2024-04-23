// import { useState } from "react";
import "./index.css";

function Pagination() {
  return (
    <div className="pagination">
      <PaginationButton>
        <img
          className="icon"
          src="/images/ic_arrow_left_active.svg"
          alt="왼쪽 화살표 아이콘"
        />
      </PaginationButton>
      <PaginationButton>1</PaginationButton>
      <PaginationButton>2</PaginationButton>
      <PaginationButton selected="true">3</PaginationButton>
      <PaginationButton>4</PaginationButton>
      <PaginationButton>
        <img
          className="icon"
          src="/images/ic_arrow_right_active.svg"
          alt="오른쪽 화살표 아이콘"
        />
      </PaginationButton>
    </div>
  );
}

function PaginationButton({ selected, children }) {
  return (
    <button className={`pagination-button ${selected && "selected"}`}>
      {children}
    </button>
  );
}

export default Pagination;
