import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Anissa Spano UD CISC275 Starter Website
            </header>
            <p>
                Hello World! Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
            <div>
                {" "}
                <h1> My Favorite Band Tame Impala </h1>
                <img
                    src="https://mrhsridgereview.org/wp-content/uploads/2021/10/I2IUU5K2LOCDXNU5PTVNYG75ZI.jpg"
                    alt="A picture of my favorite band Tame Impala"
                />
            </div>
            <div>
                <p>
                    <Container>
                        <Row>
                            <Col>
                                List of Songs:
                                <ul
                                    style={{
                                        border: "1px solid red",
                                        padding: "4px"
                                    }}
                                >
                                    <li>The Less I Know the Better</li>
                                    <li>Eventually</li>
                                    <li>Let It Happen</li>
                                    <li>Feels Like It Only Goes Backwards</li>
                                </ul>
                            </Col>
                            <Col>
                                List of Albums:
                                <ul
                                    style={{
                                        border: "1px solid red",
                                        padding: "4px"
                                    }}
                                >
                                    <li>Currents</li>
                                    <li>Lonerism</li>
                                    <li>The Slow Rush</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </p>
            </div>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
        </div>
    );
}

export default App;
