import React from "react"
import Customer from "../Classes/Customer"

class CustomerDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: []
        }
    }

    render() {
        let data = require("../data.json")
        let customers = data.customers
        // console.log(customers)
        return(
            <div className="ProductDisplay">
                <header className="Products-header">
                    <h2>Customers: </h2>
                    {customers.map((element, index)=> {
                        return (<div>
                            <Customer
                                key={index}
                                firstName={element.firstName}
                                lastName={element.lastName}
                                address={element.address}
                                phone={element.phone}
                                startDate={element.startDate}
                            />
                        </div>)
                    })}
                </header>
            </div>
        )
    }
}

export default CustomerDisplay