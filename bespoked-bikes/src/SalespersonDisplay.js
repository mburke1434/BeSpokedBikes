import React from "react"
import Salesperson from "./Classes/Salesperson.js"

class SalespersonDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            salespeople: []
        }
    }

    render() {
        let data = require("./data.json")
        console.log(data.salespeople)
        return(
            <div className="SalespersonDisplay">
                <header className="Salesperson-header">
                    <h2>Salespeople: </h2>
                    {data.salespeople.map((element, index) => {
                        return (<div>
                            <Salesperson
                            key={index}
                            firstName={element.firstName}
                            lastName={element.lastName}
                            address={element.address}
                            phone={element.phone}
                            startDate={element.startDate}
                            terminationDate={element.terminationDate}
                            manager={element.manager}
                        />
                        </div>)
                    })}
                </header>
            </div>
        )
    }
}

export default SalespersonDisplay