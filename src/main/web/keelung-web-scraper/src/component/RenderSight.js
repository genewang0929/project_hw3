import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "../Introduce.css";
import Button from 'react-bootstrap/Button';
import {Col, Container, Row} from "react-bootstrap";
import Sight from "../component/Sight";

function RenderSight({ post, fail }) {
    return (
        <div>
            {(post && post.length) ?
                <Container className="container-fluid d-flex">
                    <Row xs={1} md={3} className="g-5">
                    {post.map(post => (
                        <Col>
                            <Sight key = {post.sightName} post = {post}/>
                        </Col>
                    ))}
                    </Row>
                </Container>
            : <h1 className="text-center text-white fw-bolder loading">{fail}</h1>}
            {post.length === 0 && 
            <h1 className="text-center text-white fw-bolder loading">No Result</h1>}
        </div>
    )
}

export default RenderSight
