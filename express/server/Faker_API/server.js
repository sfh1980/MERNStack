const express = require("express");
const app = express();
const PORT = 8000;
const { faker } = require("@faker-js/faker");

class User {
    constructor(){
        this.password = faker.internet.password(),
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.phoneNumber();
        this.lastName = faker.name.lastName();
        this.firstName = faker.name.firstName();
        this._id = faker.datatype.uuid();
    }
}

const users = new User()

class Company {
    constructor(){
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street : faker.address.street(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        }
    }
}

const company = new Company()

app.get("/api/users/new", (req, res) => {    
    res.json( users)
})

app.get("/api/company/new" , (req, res) => {    
    res.json( company )
})

app.get("/api/users/company/new", (req, res) => {   
    res.json( {users, company} );
})



















app.listen(PORT, () => {
    console.log(`SERVER up on ${PORT}, listening for req to res to`)
})