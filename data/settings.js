module.exports = {
    uiPort: process.env.PORT || 1880,
    uiHost: "0.0.0.0",

    adminAuth: {
        type: "credentials",
        users: [{
            username: "julio",
            password: "$2b$08$Cj8qv8uJx6pG8wFqVq9uUu8G1xJxJgk1m6u3Q0J7p4q1Y8xW8xqf1y",
            permissions: "*"
        }]
    },

    httpNodeAuth: null,
    httpStaticAuth: null,

    functionGlobalContext: {}
};
