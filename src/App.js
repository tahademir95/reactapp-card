import React from 'react';
import Navbar from "./Navbar";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import {Container, Row, Col} from 'reactstrap';

function App() {
    let productInfo = {title: "Product List"}
    let categoryInfo = {title: "Category List"}

    return (
        <div>
            <Container>
                <Row>
                    <Navbar />
                </Row>
                <Row>
                    <Col xs="3">
                        <CategoryList info={categoryInfo} />
                    </Col>
                    <Col xs="9">
                        <ProductList info={productInfo} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
