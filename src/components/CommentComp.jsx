import React from "react";
import { ListItemGroup } from "react-bootstrap";
function CommentComp(props) {
  return (
    
      <ListItemGroup>{props.comment.comment}</ListItemGroup>
    
  );
}
export default CommentComp;
