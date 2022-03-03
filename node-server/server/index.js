

const express = require("express")
const cors = require('cors')
const port = process.env.PORT || 3001
const app = express()

//Functions as a "database" for testing
var data = {
    "products": [
        {
            "id": 0,
            "name": "Window Washing Fluid",
            "manufacturer": "Mediocre Auto Parts",
            "style": "Stylish?",
            "puchasePrice": 0.10,
            "salePrice": 1.00,
            "quantity": 36,
            "commissionPercentage": 0.05
        }
    ],
    "salespeople": [
        {
            "id": 0,
            "firstName": "John",
            "lastName": "Doe",
            "address": "1234 Anywhere St",
            "phone": "1234567890",
            "startDate": "01/02/2003",
            "terminationDate": "04/05/2006",
            "manager": "Manajohn Gerald"
        },
        {
            "id": 1,
            "firstName": "Joe",
            "lastName": "Schmoe",
            "address": "1234 Wherever Ave",
            "phone": "0987654321",
            "startDate": "11/25/1999",
            "terminationDate": "02/02/2022",
            "manager": "Manajohn Gerald"
        }
    ],
    "customers": [
        {
            "id": 0,
            "firstName": "Jane",
            "lastName": "Doe",
            "address": "1234 Anywhere St",
            "phone": "4044044004",
            "startDate": "04/08/2021"
        }
    ],
    "sales": [
        {
            "id": 0,
            "product": "Headlight Fluid",
            "salesperson": "Elbo Gris",
            "customer": "Jane Doe",
            "saleDate": "06/06/2021"
        }
    ],
    "discounts": [
        {
            "id": 0,
            "product":"Headlight Fluid",
            "beginDate": "05/07/2021",
            "endDate": "05/07/2025",
            "discountPercentage": 0.20
        }
    ]
}

app.use(cors({
    origin: '*'
}))

app.get("/api", (request, response) => {
    response.json({message: "Hello from server!"})
})

app.get("/api/products", (request, response) => {
    response.json(data.products)
})

app.post("/api/products", (request, response) => {
    //Take request data, update var data
    data.products[request.unique_id] = request.data
})

app.get("/api/salespeople", (request, response) => {
    response.json(data.salespeople)
})

app.get("/api/customers", (request, response) => {
    response.json(data.customers)
})

app.get("/api/sales", (request, response) => {
    response.json(data.sales)
})

app.get("/api/discounts", (request, response) => {
    response.json(data.discounts)
})

app.listen(port, () => {
    console.log("Listening on port " + port)
})