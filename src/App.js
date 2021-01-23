// import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import DataSoalList from "./Component/DataSoalList";
import Soal1 from "./UjiNyali/Soal1";
import Soal2 from "./UjiNyali/Soal2";
import Soal3 from "./UjiNyali/Soal3";

function App() {
  // const [isian, setIsian] = useState(DATA_SOAL);
  return (
    <div className="App">
    <Soal1/>
    <Soal2/>
    <Soal3/>
      {/* <DataSoalList isian={isian} /> */}
    </div>
  );
}
// const DATA_SOAL = [
//   {
//     // type: "radio",
//     id: 1,
//     question: "Siapakah penemu baling-baling bambu",
//     options1: ["Doraemon", "Hanif", "Nobita", "Naruto"],
//     answer: "Doraemon",
//   },
//   {
//     // type: "checkbox",
//     id: 2,
//     question: "pilihlah 3 yang benar mengenai aqil",
//     options2: ["Manusia", "Trainer Juara Coding", "Anggota Avenger"],
//     answer: ["Manusia", "Anggota Avenger"],
//   },
//   {
//     // type: "essay",
//     id: 3,
//     question: "Ceritakan pengalaman anda ketika sedang tidur",
//     options3: [],
//     answer: [],
//   },
// ];

export default App;
