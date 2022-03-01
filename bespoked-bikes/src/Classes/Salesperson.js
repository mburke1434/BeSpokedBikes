import React from "react"

class Salesperson extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            key: this.props.key,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            address: this.props.address,
            phone: this.props.phone,
            startDate: this.props.startDate,
            terminationDate: this.props.terminationDate,
            manager: this.props.manager,
        }
    }

    render() {
        return(
            <div>
                <h3>{this.state.firstName + " " + this.state.lastName}</h3>
                <ul>
                    <li>Address: {this.state.address}</li>
                    <li>Phone: {this.state.phone}</li>
                    <li>Term: {this.state.startDate + "-" + this.state.terminationDate}</li>
                    <li>Reports to: {this.state.manager}</li>
                </ul>
            </div>
        )
    }
}

export default Salesperson