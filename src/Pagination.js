import React, { useState } from "react";
import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import "./App.css";

const Pagination = () => {
  const [users, setUsers] = useState(JsonData.slice(0, 51));
  console.log(users);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const recordsVisited = pageNumber * usersPerPage;
  const displayUsers = users
    .slice(recordsVisited, recordsVisited + usersPerPage)
    .map((user, i) => (
      <div className="user" key={i}>
        <h3>{user.first_name}</h3>
        <h3>{user.last_name}</h3>
        <h3>{user.email}</h3>
      </div>
    ));
  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      {displayUsers}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttn"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Pagination;
