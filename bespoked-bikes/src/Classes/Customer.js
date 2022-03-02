import React from "react"

class Customer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            key: this.props.key,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            address: this.props.address,
            phone: this.props.phone,
            startDate: this.props.startDate,
        }
    }

    render() {
        return(
            <div>
                <h3>{this.state.firstName + " " + this.state.lastName}</h3>
                <ul>
                    <li>Address: {this.state.address}</li>
                    <li>Phone: {this.state.phone}</li>
                    <li>Customer Since: {this.state.startDate}</li>
                </ul>
            </div>
        )
    }
}

export default Customer