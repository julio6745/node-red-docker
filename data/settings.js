module.exports = {
    uiPort: process.env.PORT || 1880,
    uiHost: "0.0.0.0",

    adminAuth: {
        type: "credentials",
        users: [{
            username: "julio",
            password: "$2b$08$uH0q4xW8pZqVgZ8pE8u7qO3xJgk1m6u3Q0J7p4q1Y8xW8xqf1yW2",
            permissions: "*"
        }]
    },

    httpNodeAuth: null,
    httpStaticAuth: null,

    functionGlobalContext: {}
};
