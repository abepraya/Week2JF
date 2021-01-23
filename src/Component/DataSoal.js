import React from "react";
import { Card, Container, Form } from "react-bootstrap";

export default function DataSoal({ isi }) {
    const CardList = {
    padding: "10px",
    fontFamily: "Arial",
    marginBottom: "5px",
    marginTop: "5px",
  };
  const AnswerList = {
    paddingBottom: "2px",
    paddingLeft: "25px"
    // marginBottom: "5px",
    // marginTop: "5px",
  };
  return (
    <Card>
      <Container>
        <div className="Question" style={CardList}>
          {isi.id}.{isi.question}
        </div>
         <div className="Answers1" style={AnswerList}>
              <div>{isi.options1}</div>
        </div> 
        <div className="Answers2" style={AnswerList}>
          {isi.options2}
        </div>
        <div className="Answers3" style={AnswerList}>
          {isi.options3}
        </div>
      </Container>
    </Card>
  );
}
