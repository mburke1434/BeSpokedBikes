import React from "react"
import Discount from "../Classes/Discount.js"

class DiscountDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            discounts: []
        }
    }

    render() {
        let data = require("../data.json")
        console.log(data.discounts)
        return(
            <div className="DiscountDisplay">
                <header className="Discounts-header">
                    <h2>Discounts: </h2>
                    {data.discounts.map((element, index)=> {
                        return (<div>
                            <Discount
                                key={index}
                                product={element.product}
                                beginDate={element.beginDate}
                                endDate={element.endDate}
                                discountPercentage={element.discountPercentage}
                            />
                        </div>)
                    })}
                </header>
            </div>
        )
    }
}

export default DiscountDisplay