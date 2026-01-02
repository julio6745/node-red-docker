module.exports = {
    uiPort: process.env.PORT || 1880,
    uiHost: "0.0.0.0",

    adminAuth: {
        type: "credentials",
        users: [{
            username: "julio",
            password: "$2b$08$8p0u8k8VnX0pZqVgZ8pE8u7qJxJgk1m6u3Q0J7p4q1Y8xW8xqf1yW",
            permissions: "*"
        }]
    },

    httpNodeAuth: null,
    httpStaticAuth: null,

    functionGlobalContext: {}
};
