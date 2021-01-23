import React from "react";
import { Form, Container } from "react-bootstrap";
import BankSoal from "./BankSoal";

const Soal1 = () => {
  const { id, question, options1 } = BankSoal[0];
  return (
    <Container>
      <Form style={{ padding: "25px" }}>
        {id}.{question}
        <div>
          {options1.map((option) => (
            <ul style={{listStyleType:"none",paddingLeft:"10px",paddingTop:"5px",display:"flex",width:"100%"}}>
              
                <li>
                  <input
                    type="radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  {option.title}
                </li>
            </ul>
          ))}
        </div>
      </Form>
    </Container>
  );
};

export default Soal1;
