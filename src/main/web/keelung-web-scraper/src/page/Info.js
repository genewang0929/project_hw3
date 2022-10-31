import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "../Introduce.css";
import Button from 'react-bootstrap/Button';
import {Col, Container, Row} from "react-bootstrap";
import Sight from "../component/Sight";

function Info() {
    const region = useParams();
    const [fail, setFail] = useState("Fetching data...")
    const [post, setPost] = useState([]);
    const url = "/SightAPI?zone=" + region.region;

    useEffect(() => {
        fetchAPI()
    }, [])

    const fetchAPI = () => {
        fetch(url)
            .then(res => {
                if (!res.ok)
                    setFail("Fail to fetch data!");
                else
                    return res.json()
            })
            .then(data => {
                setPost(data)
            });
    }

    return (
        <div className="background App">
            {(post && post.length) ?
                <Container className="container-fluid d-flex justify-content-center">
                    <Row xs={1} md={3} className="g-5">
                    {post.map(post => (
                        <Col>
                            <Sight key = {post.sightName} post = {post}/>
                        </Col>
                    ))}
                    </Row>
                </Container>
            : <h1 className="text-center text-white fw-bolder loading">{fail}</h1>}
        </div>

    );
}

export default Info;