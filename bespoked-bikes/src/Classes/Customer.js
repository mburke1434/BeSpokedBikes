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
}

export default Customer