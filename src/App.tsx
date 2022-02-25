import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Anissa Spano UD CISC275 Starter Website
            </header>
            <div>
                Hello World! Edit <code>src/App.tsx</code> and save.
            </div>
            <div>
                {" "}
                <h1> Tame Impala </h1>
                <img
                    src="https://mrhsridgereview.org/wp-content/uploads/2021/10/I2IUU5K2LOCDXNU5PTVNYG75ZI.jpg"
                    alt="A picture of my favorite band Tame Impala"
                />
            </div>
            <div>
                <div>
                    <Container>
                        <Row>
                            <Col>
                                List of Songs:
                                <div id="rectangle">
                                    <ul>
                                        <li>The Less I Know the Better</li>
                                        <li>Eventually</li>
                                        <li>Let It Happen</li>
                                        <li>
                                            Feels Like It Only Goes Backwards
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col>
                                List of Albums:
                                <div id="rectangle">
                                    Currents Lonerism The Slow Rush
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
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
