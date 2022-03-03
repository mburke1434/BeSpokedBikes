import React from "react"
import { useState } from "react"
import {EditText, EditTextarea } from 'react-edit-text';

const Product = (props) => {
    const id = props.id
    const [name, setName] = useState(props.name)
    const [manufacturer, setManufacturer] = useState(props.manufacturer)
    const [style, setStyle] = useState(props.style)
    const [purchasePrice, setPurchasePrice] = useState(props.purchasePrice)
    const [salePrice, setSalePrice] = useState(props.salePrice)
    const [quantity, setQuantity] = useState(props.quantity)
    const [commissionPercentage, setCommissionPercentage] = useState(props.commissionPercentage)
    // const [editing, setEditing] = useState(false)

    const fetchData = () => {
        fetch('http://localhost:3001/api/products', {
            method: 'GET',
        }).then(response => {
            response.json().then(data => {
                console.log(data)
                setName(data[0].name)
            })
        }).catch(error => {
            console.log("Error :" + error)
        })
    }

    const updateData = () => {
        // setEditing(false)
        //TODO update database based on current state
        const newData = {
            "id": id,
            "name": name,
            "manufacturer": manufacturer,
            "style": style,
            "purchasePrice": purchasePrice,
            "salePrice": salePrice,
            "quantity": quantity,
            "comissionPercentage": commissionPercentage
        }
        fetch('http://localhost:3001/api/products', {
            method: 'PUSH',
            mode: 'no-cors',
            data: newData
        })
    }

    // console.log(editing)
    return (
        <div>
            Name: <EditText value={name} onChange={setName} inline /><br />
            Manufacturer: <EditText value={manufacturer} onChange={setManufacturer} inline /><br />
            Style: <EditText value={style} onChange={setStyle} inline /><br />
            Purchase Price: $<EditText value={purchasePrice} onChange={setPurchasePrice} inline /><br />
            Sale Price: $<EditText value={salePrice} onChange={setSalePrice} inline /><br />
            Quantity: <EditText value={quantity} onChange={setQuantity} inline /><br />
            Commission Percentage: <EditText value={commissionPercentage*100} onChange={setCommissionPercentage} inline />%<br />
            <form>
                <input type="button" value="Fetch" onClick={fetchData} />
            </form>
        </div>
        // :
        // <div>
        //     <p>{name}</p>
        //     <ul>
        //         <li>Manufacturer: {manufacturer}</li>
        //         <li>Style: {style}</li>
        //         <li>Purchase Price: ${purchasePrice}</li>
        //         <li>Sale Price: ${salePrice}</li>
        //         <li>Quantity: {quantity}</li>
        //         <li>Commission: {commissionPercentage*100}%</li>
        //     </ul>
        //     <form>
        //         <input type="submit" value="Edit" onClick={setEditing(true)} />
        //     </form>
        // </div>

    )

        // this.state = {
        //     key: this.props.key,
        //     name: this.props.name,
        //     manufacturer: this.props.manufacturer,
        //     style: this.props.style,
        //     purchasePrice: this.props.purchasePrice,
        //     salePrice: this.props.salePrice,
        //     quantityOnHand: this.props.quantityOnHand,
        //     commissionPercentage: this.props.commissionPercentage,
        //     editing: false
        // }
        // this.handleInputChange = this.handleInputChange.bind(this)
        // this.setEditing = this.setEditing.bind(this)
        // this.saveChanges = this.saveChanges.bind(this)
}

    // setEditing() {
    //     this.setState({
    //         editing: true
    //     })
    // }

    // saveChanges() {
    //     this.setState({
    //         editing: false
    //     })
    //     //TODO update state and JSON with newly saved changes
    // }

    // render() {
    //     return(this.state.editing ?
    //         <div>
    //             Name: <Editable value={this.state.name} /><br />
    //             Manufacturer: <EditText id="manufacturer" defaultValue={this.state.manufacturer} inline/><br />
    //             Style: <EditText id="style" defaultValue={this.state.style} inline/><br />
    //             Purchase Price: $<EditText id="purchasePrice" defaultValue={this.state.purchasePrice} inline/><br />
    //             Sale Price: $<EditText id="salePrice" defaultValue={this.state.salePrice} inline/><br />
    //             Quantity: <EditText id="quantityOnHand" defaultValue={this.state.quantityOnHand} inline/><br />
    //             Commission: <EditText id="commissionPercentage" defaultValue={this.state.commissionPercentage} inline/><br />
    //             <form>
    //                 <input type="submit" value="Submit" onClick={this.saveChanges} />
    //             </form>
    //         </div>
    //         :
    //         <div>
    //             <p>{this.state.name}</p>
    //             <ul>
    //                 <li>Manufacturer: {this.state.manufacturer}</li>
    //                 <li>Style: {this.state.style}</li>
    //                 <li>Purchase Price: ${this.state.purchasePrice}</li>
    //                 <li>Sale Price: ${this.state.salePrice}</li>
    //                 <li>Quantity: {this.state.quantityOnHand}</li>
    //                 <li>Commission: {this.state.commissionPercentage*100}%</li>
    //             </ul>
    //             <form>
    //                 <input type="submit" value="Edit" onClick={this.setEditing} />
    //             </form>
    //         </div>
    //     )
    // }

export default Product