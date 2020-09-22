import React from 'react';
import Navbar from "./Navbar";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import {Container, Row, Col} from 'reactstrap';

function App() {
    let titleProduct = "Product List"

    return (
        <div>
            <Container>
                <Row>
                    <Navbar />
                </Row>
                <Row>
                    <Col xs="3">
                        <CategoryList title="Category List" />
                    </Col>
                    <Col xs="9">
                        <ProductList title={titleProduct} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
