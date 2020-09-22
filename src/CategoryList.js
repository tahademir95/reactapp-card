import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap'

class CategoryList extends Component {

    //Constructor ile props ları taşır, ama props u eklemek için bunu eklemek zorunda değilsin, eklemesende erişim olur yenireact ın versiyonları sayesinde
    constructor(props) {
        super(props);
        state: {}
    }

    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ListGroup>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Morbi leo risus</ListGroupItem>
                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default CategoryList;