import React from "react"

class Customer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            address: "",
            phone: "",
            startDate: "",
        }
    }
}

export default Customer