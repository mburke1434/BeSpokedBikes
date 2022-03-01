import Salesperson from "./Classes/Salesperson.js"



function SalespersonDisplay() {
    var salespeople = ""
    return(
        <div className="SalespersonDisplay">
            <header className="Salesperson-header">
                <p>Salespeople: </p>
                <p>{salespeople}</p>
            </header>
        </div>
    )
}

export default SalespersonDisplay