import React, {Component} from 'react';
import Navbar from "./Navbar";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import {Container, Row, Col} from 'reactstrap';

class App extends Component {

    //App'in altında iki adet Component oluturuldu, App her ikisinede data transferi yapabilir ancak diğer ikisi kendi arasında data transferi yapamaz.
    //              App
    //             /   \
    //  CategoryList    ProductList
    //categoryList'ten productList'e data transferi olmadığı için App class'a çevrildi ve CategoryList teki changeCategory ve currentCategory
    //App'e taşındı. Şimdi App üzerinden productList'e data transferi yapılabilecek. Yani CategoryList'teki bir category'e tıklandığında
    //o category'e adit product'lar görüntülenebilecek
    state = {
        currentCategory: "",
        products: []
    }

    componentDidMount() {
        this.getProducts();
    }


    getProducts = () => {
        fetch("http://localhost:3000/products")
            .then(response => response.json())
            .then(data => this.setState({products: data}) )
    }

    changeCategory = category => {
        this.setState({currentCategory: category.categoryName})
    }

    render(){
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
                            <CategoryList info={categoryInfo} changeCategory={this.changeCategory} currentCategory={this.state.currentCategory} />
                        </Col>
                        <Col xs="9">
                            <ProductList info={productInfo} currentCategory={this.state.currentCategory} products={this.state.products} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default App;
