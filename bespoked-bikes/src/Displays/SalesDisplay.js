import React from "react"
import Sale from "../Classes/Sale"

class SalesDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sales: []
        }
    }

    render() {
        let sales = require("../data.json").sales
        // console.log(sales)
        return(
            <div className="ProductDisplay">
                <header className="Products-header">
                    <h2>Sales: </h2>
                    {sales.map((element, index)=> {
                        return (<div>
                            <Sale
                                key={index}
                                product={element.product}
                                salesperson={element.salesperson}
                                customer={element.customer}
                                saleDate={element.saleDate}
                            />
                        </div>)
                    })}
                </header>
            </div>
        )
    }
}

export default SalesDisplay