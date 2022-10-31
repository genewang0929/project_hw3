import React from 'react';
import { Link } from 'react-router-dom'
import "../Introduce.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import {Col, Container, Row} from "react-bootstrap";

function Region() {
    const region = ["七堵區", "中山區", "中正區", "仁愛區", "安樂區", "信義區", "暖暖區"];

    return (
        <div className="App background">
            <Container className="container-fluid d-flex justify-content-center">
                <Row xs={1} md={3} className="g-5">
                    {["Secondary",
                        "Success",
                        "Danger",
                        "Warning",
                        "Info",
                        "Light",
                        "Dark"].map((variant, idx) => (
                        <Col>
                            <Card
                                bg={variant.toLowerCase()}
                                key={idx}
                                text={variant.toLowerCase() === "light" ? "dark" : "white"}>
                                <Card.Body>
                                    <Card.Title><h2>{region[idx]}</h2></Card.Title>
                                    <Link to={"/region/" + region[idx]} id={variant} className="btn btn-primary">查看</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Region;
