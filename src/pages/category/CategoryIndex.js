import React, { useState } from "react";
import { getCategory, postCategory } from "../../api/category/categoryapi";

// 초기 데이터의 형식을 미리 정의하면 타입스크립트 좋아요.
const initialState = [
  {
    categoryPk: 0,
    categoryNm: "string",
  },
];

const CategoryIndex = () => {
  // None Condtion 내용을 상단에 기재한다.
  const [cateList, setCateList] = useState(initialState);
  const handleClickCategoryGet = () => {
    getCategory(setCateList);
  };
  const categoryPostResultAction = result => {
    if (result == 0) {
      alert("이미 존재하는 카테고리입니다. 다시 입력요망");
      return;
    }
    if (result == 1) {
      alert("등록되었습니다.");
      getCategory(setCateList);
      return;
    }
    alert("서버가 불안정합니다.");
  };
  const handleClickCategoryPost = () => {
    const obj = {
      categoryNm: "생필품3",
    };
    postCategory(obj, categoryPostResultAction);
  };
  const handleClickCategoryPut = () => {
    console.log("클릭");
  };
  const handleClickCategoryFetch = () => {
    console.log("클릭");
  };
  const handleClickCategoryDelete = () => {
    console.log("클릭");
  };
  return (
    <div>
      <button
        onClick={() => {
          handleClickCategoryGet();
        }}
      >
        Get
      </button>
      <button
        onClick={() => {
          handleClickCategoryPost();
        }}
      >
        Post
      </button>
      <button
        onClick={() => {
          handleClickCategoryPut();
        }}
      >
        Put
      </button>
      <button
        onClick={() => {
          handleClickCategoryFetch();
        }}
      >
        Fetch
      </button>
      <button
        onClick={() => {
          handleClickCategoryDelete();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default CategoryIndex;
