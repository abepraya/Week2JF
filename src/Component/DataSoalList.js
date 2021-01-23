import React from 'react'
import DataSoal from './DataSoal'
import { Container } from "react-bootstrap";

export default function DataSoalList({isian}) {
    return (
        <Container>
        <div className="card-grid">
            {isian.map(isi=>{
                return <DataSoal isi={isi} key={isi.id}/>
            })}
        </div>
        </Container>
    )
}
