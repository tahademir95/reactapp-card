import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap'

class CategoryList extends Component {

    state= {
        categories: [
            {
                categoryId: 1,
                categoryName: "Beverages"
            },
            {
                categoryId: 2,
                categoryName: "Condiments"
            }
        ]
    }



    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ListGroup>
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem key={category.categoryId} onClick={() => this.props.changeCategory(category)}>
                                {category.categoryName}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
                <h4>{this.props.currentCategory}</h4>
            </div>
        );
    }
}

export default CategoryList;