import React, {Component} from 'react';

class ProductList extends Component {

    //props a erişmek için constructor ı eklemek zorunda değilsin
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
            </div>
        );
    }
}

export default ProductList;