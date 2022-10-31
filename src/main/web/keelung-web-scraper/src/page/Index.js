import React from 'react';
import { Link } from 'react-router-dom'
import "../Introduce.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";

function Index() {
    return (
        <div className="background App">
            <Container className="container-fluid d-flex justify-content-center flex-column">
                <h1 className='searchLabel'>Menu</h1>
                <Container className="d-flex justify-content-center">
                    <Link to={"/region"} variant="outline-primary" className="btn btn-info m-3">查看區域</Link>
                    <Link to={"/search"} variant="outline-success" className="btn btn-warning m-3">景點搜尋</Link>
                </Container>
            </Container>
        </div>
    )
}

export default Index
