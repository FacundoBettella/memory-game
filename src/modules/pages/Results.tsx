import React from "react";
import { resetCardState } from "../redux/slices/cards.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../components";

const Results = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(resetCardState());
    navigate("/memory-game");
  };

  return (
    <Container className="pt-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <h1 className="text-center mb-4" style={{ color: "white" }}>
            You win!
          </h1>
          <Button color="primary" text="Play again" onClick={handleClick} />
        </Col>
      </Row>
    </Container>
  );
};
export default Results;
