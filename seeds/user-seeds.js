const { User } = require('../models');

const userData = [
    {
        username: "john",
        email: "john@gmail.com",
        password: "Root1234"
    },
    {
        username: "Sally",
        email: "sally@gmail.com",
        password: "Root1234"
    },
    {
        username:"tom",
        email:"tom@gmail.com",
        password:"Root1234"
    }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    // hooks: true,
});

module.exports = seedUsers