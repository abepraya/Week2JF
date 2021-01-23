import BankSoal from "./BankSoal";
import { Container,Form } from "react-bootstrap";

const Soal2 = () =>{
    const{id,question,options2} = BankSoal[1];
    return(
        <Container>
      <Form style={{ padding: "25px" }}>
        {id}.{question}
        <div>
          {options2.map((option) => (
            <ul style={{listStyleType:"none",paddingLeft:"10px",display:"flex",width:"100%"}}>   
                <li>
                  <input
                    type="checkbox"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    style={{paddingLeft:"10px",marginLeft:"5px",flex:"1",position:"relative"}}
                  />
                  {option.title}
                </li>            
            </ul>
          ))}
        </div>
      </Form>
    </Container>
    )
}

export default Soal2;