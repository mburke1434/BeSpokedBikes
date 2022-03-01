import Customer from "./Customer.js"

class Salesperson extends Customer {
    constructor(fnm, lnm, addr, ph, start, term, mgr) {
        super(fnm, lnm, addr, ph, start)
        this.terminationDate = term
        this.manager = mgr
    }
}