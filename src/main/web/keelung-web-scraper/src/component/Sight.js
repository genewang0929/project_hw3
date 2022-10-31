import React from 'react';
import {Accordion, Card, ListGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Sight({post}) {

    const showInMapClicked = () => {
        const url = "https://maps.google.com?q=" + post.address;
        window.open(url);
    };

    return (
        <div>
            <Card className="cardSize">
                <Card.Body>
                    <Card.Title>景點名稱: {post.sightName}</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>區域: {post.zone}</ListGroup.Item>
                        <ListGroup.Item>分類: {post.category}</ListGroup.Item>
                        <Button variant="primary" onClick={showInMapClicked}>查看地址</Button>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>詳細資訊</Accordion.Header>
                                <Accordion.Body>
                                    {post.description}
                                    <Card.Img src={post.photoURL} alt="new"></Card.Img>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ListGroup>

                </Card.Body>
            </Card>
        </div>
    );
}

export default Sight;