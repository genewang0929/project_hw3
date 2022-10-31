import React, {useEffect, useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Introduce.css";
import Button from 'react-bootstrap/Button';
import {Col, Container, Row, Form, FormControl} from "react-bootstrap";
import RenderSight from '../component/RenderSight';

function Search() {
    const [url, setUrl] = useState('/SightAPI/search?sightName=');
    const [fail, setFail] = useState("Fetching data...")
    const [post, setPost] = useState([]);
    const [buttonClick, setButtonClick] = useState(false);
    const inputRef = useRef("");
    const submitHandler = e => {
        e.preventDefault();
        console.log(inputRef.current.value);
        setButtonClick(true);
        startSearch(inputRef.current.value);
    }

    useEffect(() => {
        startSearch(inputRef.current.value);
    }, [inputRef.current.value])

    const startSearch = (sightName) => {
        setUrl('/SightAPI/search?sightName=' + sightName);
        console.log(url);

        fetch(url)
            .then(res => {
                if (!res.ok)
                    setFail("Fail to fetch data!");
                else
                    return res.json()
            })
            .then(data => {
                setFail("");
                setPost(data)
            });
    }


    return (
        <div className="background App">
            <Container className='container-fluid d-flex justify-content-center flex-column'>
                <h1 className='searchLabel'>Search</h1>

                <Form className="d-flex searchBar" onSubmit={submitHandler}>
                    <FormControl
                        type="search"
                        placeholder="輸入地名"
                        className="me-2"
                        aria-label="Search"
                        ref={inputRef}
                    />
                    <Button variant="outline-success" type='submit'>Search</Button>
                </Form>

                {buttonClick && 
                <RenderSight post={post} fail={fail}></RenderSight>}
            </Container>
        </div>
    )
}

export default Search
