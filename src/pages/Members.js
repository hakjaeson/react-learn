import React from "react";
import { Link, Outlet } from "react-router-dom";

const Members = ({ member }) => {
  // 멤버 목록 JSX 만들기
  const showList = member.map(function (item, index) {
    return (
      <li key={index}>
        {item.name}
        <Link to={`/members/${item.name}`}>상세보기</Link>
      </li>
    );
  });

  return (
    <div>
      <h2>Members</h2>
      <div>
        <ul>{showList}</ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Members;
