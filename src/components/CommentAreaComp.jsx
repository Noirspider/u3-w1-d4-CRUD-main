import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import CommentComp from "./CommentComp";

function CommentAreaComp(props) {
  const [arrayOfComment, setArrayOfComment] = useState([]);
  const token =
    "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczMzUwZmZlMDMxZTAwMTliYTE3NWIiLCJpYXQiOjE3MDMxNzE1NDQsImV4cCI6MTcwNDM4MTE0NH0.1-WXWLJyCwzcoJMYqGy_Oft8sQQv8xG7LyVQn25TCSo";

  async function fetchAllComment(bookObj) {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + bookObj.asin, {
        headers: {
          authorization: token,
        },
      });

      if (response.ok) {
        const arrayCommentObj = await response.json();
        setArrayOfComment(arrayCommentObj);
        console.log(arrayCommentObj);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  useEffect(() => {
    fetchAllComment(props.bookObj);
  }, []);

  return (
    <ListGroup>
      {arrayOfComment.map((comment, index) => (
        <CommentComp key={"comment-" + index} comment={comment} />
      ))}
    </ListGroup>
  );
}

export default CommentAreaComp;
