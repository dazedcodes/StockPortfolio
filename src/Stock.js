import React, { Component } from 'react'

export class Stock extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.id;
        this.symbol = this.props.symbol;
        this.category = this.props.category;
        this.shares = this.props.shares;
        this.platform = this.props.platform;
    }
    render() {
        return (
            <div>
                <p>{this.props.symbol}</p>
                <p>{this.props.category}</p>
                <p>{this.props.shares}</p>
                <p>{this.props.platform}</p>
                <button actionid={this.props.id} className="edit-btn">Edit</button>
                <button actionid={this.props.id} className="delete-btn">Delete</button>
            </div>
        )
    }
}

export default Stock
