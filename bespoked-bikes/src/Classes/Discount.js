import React from "react"

class Discount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            key: this.props.key,
            product: this.props.product,
            beginDate: this.props.beginDate,
            endDate: this.props.endDate,
            discountPercentage: this.props.discountPercentage,
        }
    }

    render() {
        return(
            <div>
                <h3>{this.state.product}</h3>
                <ul>
                    <li>Discount Term: {this.state.beginDate + "-" + this.state.endDate}</li>
                    <li>% Off: {this.state.discountPercentage * 100}%</li>
                </ul>
            </div>
        )
    }
}

export default Discount