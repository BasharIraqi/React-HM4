import React, { Component } from 'react'

export default class RowItemProduct extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const product = this.props.product;
        let styleStocked = product.stocked ? { color: "black" } : { color: "red", textDecoration: "line-through" };
        let deleteButton = !product.stocked ? <button onClick={this.handleDelete} className="btn btn-danger">Delete</button>:'';

        return (
            <tr className="table-active"  >
                <td style={styleStocked}>{product.name} {deleteButton}</td>
                <td>{product.price}$</td>
            </tr>
        );
    }

    handleDelete = (e) => {
        e.preventDefault();
        this.props.onDelete(this.props.product.name);
    }
}