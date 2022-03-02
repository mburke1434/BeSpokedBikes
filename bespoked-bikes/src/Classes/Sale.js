import React from 'react'

class Sale extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: this.props.product,
            salesPerson: this.props.salePerson,
            customer: this.props.customer,
            saleDate: this.props.saleDate,
        }
    }

    render() {
        return(
            <div>
                <h3>{this.state.product}</h3>
                <ul>
                    <li>Salesperson: {this.state.salesperson}</li>
                    <li>Customer: {this.state.customer}</li>
                    <li>Sale Date: {this.state.saleDate}</li>
                </ul>
            </div>
        )
    }
}

export default Sale