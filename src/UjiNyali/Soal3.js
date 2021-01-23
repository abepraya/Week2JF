import React from "react";
import { Form, Container } from "react-bootstrap";
import BankSoal from "./BankSoal";

const Soal3 = () => {
  const { id, question, options3 } = BankSoal[2];
  return (
    <Container>
      <Form style={{ padding: "25px" }}>
        {id}.{question}
        <div className="Kolom" style={{padding:"15px"}}>
        <Form.Control type="text" placeholder="Jawaban" />{options3}
        </div>
      </Form>
    </Container>
  );
};

export default Soal3;
