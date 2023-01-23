
// import express
const express = require("express");
const app = express();
const port = 8000;

// import fake
const { faker } = require("@faker-js/faker");

// declare arrays for users and companies
const users = [];
const companies = [];

// method to create new user
const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    };
    users.push(newUser);
    return newUser;
}

// method to create new company
const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    };
    companies.push(newCompany);
    return newCompany;
}

app.get('/api', (req, res) => {
    res.send("<h1>Hello World!</h1>");
})

app.get('/api/users/new', (req, res) => {
    res.json(createUser());
})

app.get('/api/companies/new', (req, res) => {
    res.json(createCompany());
})

app.get('/api/user/company', (req, res) => {
    const bothUserCompany = {
        user: createUser(),
        company: createCompany()
    };
    res.json(bothUserCompany);
})

const server = app.listen(port, () => {
    console.log(`Server is locked and loaded on port ${port}!`);
})
