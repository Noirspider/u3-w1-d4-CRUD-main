import React from "react";
import CardComp from "./CardComp";
import { Col, Row } from "react-bootstrap";
import AddCommentComp from "./AddCommentComp";
import CommentAreaComp from "./AddCommentComp";

function MyDetail(props) {
  return (
    <Row className=" justify-content-center min-vh-100">
      <Col xs={4}>
        <CardComp book={props.bookObj} />
      </Col>
      <Col xs={12}>
        <AddCommentComp />
        <CommentAreaComp />
      </Col>
    </Row>
  );
}
export default MyDetail;
