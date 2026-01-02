module.exports = {
    uiPort: process.env.PORT || 1880,

    // Solo el editor protegido
    adminAuth: {
        type: "credentials",
        users: [{
            username: "julio",
            password: "$2b$08$8p0u8k8VnX0pZqVgZ8pE8u7qJxJgk1m6u3Q0J7p4q1Y8xW8xqf1yW",
            permissions: "*"
        }]
    },

    // Dashboard sin contraseña
    httpNodeAuth: null,
    httpStaticAuth: null,

    functionGlobalContext: {}
};


