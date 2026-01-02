module.exports = {
    // Puerto donde escucha Node-RED (Railway usa la variable PORT)
    uiPort: process.env.PORT || 1880,

    // Autenticación del editor de Node-RED
    adminAuth: {
        type: "credentials",
        users: [{
            username: process.env.NODE_RED_USERNAME || "julio",
            password: "$2b$08$8p0u8k8VnX0pZqVgZ8pE8u7qJxJgk1m6u3Q0J7p4q1Y8xW8xqf1yW",
",
            permissions: "*"
        }]
    },

    // Autenticación para los endpoints HTTP (incluye /ui)
    httpNodeAuth: {
        user: process.env.NODE_RED_USERNAME || "julio",
        pass: "$2b$08$8p0u8k8VnX0pZqVgZ8pE8u7qJxJgk1m6u3Q0J7p4q1Y8xW8xqf1yW"

    // Autenticación para archivos estáticos (si los hubiera)
    httpStaticAuth: {
        user: process.env.NODE_RED_USERNAME || "julio",
        pass: "$2b$08$8p0u8k8VnX0pZqVgZ8pE8u7qJxJgk1m6u3Q0J7p4q1Y8xW8xqf1yW"
    },

    // Contexto global (puedes añadir variables aquí si las necesitas)
    functionGlobalContext: {}
};
