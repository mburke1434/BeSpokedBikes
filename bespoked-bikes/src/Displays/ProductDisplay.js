import React from "react"
import Product from "../Classes/Product"
import Editable from "../Classes/Editable"

class ProductDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    render() {
        let products = require("../data.json").products
        // console.log(products)
        return(
            <div className="ProductDisplay">
                <header className="Products-header">
                    <h2>Products: </h2>
                    {products.map((element, index)=> {
                        return (<div>
                            <Product
                                id={index}
                                name={element.name}
                                manufacturer={element.manufacturer}
                                style={element.style}
                                purchasePrice={element.purchasePrice}
                                salePrice={element.salePrice}
                                quantity={element.quantity}
                                commissionPercentage={element.commissionPercentage}
                            />
                        </div>)
                    })}
                </header>
            </div>
        )
    }
}

export default ProductDisplay