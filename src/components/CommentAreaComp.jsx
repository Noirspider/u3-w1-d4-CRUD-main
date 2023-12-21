import React, { useState } from "react";
function CommentAreaComp(props) {
  const [arrayOfComment, setArrayOfComment] = useState([]);

  const token =
    "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczMzUwZmZlMDMxZTAwMTliYTE3NWIiLCJpYXQiOjE3MDMxNzE1NDQsImV4cCI6MTcwNDM4MTE0NH0.1-WXWLJyCwzcoJMYqGy_Oft8sQQv8xG7LyVQn25TCSo";
  async function fetchAllComment(bookObj) {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + bookObj.asin, {
      headers: {
        authorization: token,
      },
    });
    if (response.ok) {
      const arrayCommentObj = await response.json();
      setArrayOfComment(arrayCommentObj);
    }
  }

  return <div></div>;
}
export default CommentAreaComp;
