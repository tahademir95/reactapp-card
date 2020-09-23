import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap'

class CategoryList extends Component {

    //Json Server ile Api kurulumu - "npm install -g json-server" ile json server kurulur. Sonra projelerin bulunduğu klasörün altına "api"
    // adında klasör oluşturulur ve o klasörün içine "db.json" adında bir dosya oluşturulur. Terminalden api klasörüne gidilir ve
    // "json-server --watch db.json" kodu çalıştırılır. json-server 3000'inci portta çalıştığı için react projesini tekrar çalıştırılır ve
    // başka bir portta açılması sağlanır.

    state= {
        categories: []
    }

    componentDidMount() {
        this.getCategories();
    }


    getCategories = () => {
        fetch("http://localhost:3000/categories")
            .then(response => response.json())
            .then(data => this.setState({categories: data}))
    }

    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ListGroup>
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem key={category.id} onClick={() => this.props.changeCategory(category)}>
                                {category.categoryName}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
                {/*<h4>{this.props.currentCategory}</h4>*/}
            </div>
        );
    }
}

export default CategoryList;