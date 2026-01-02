module.exports = {
    // Puerto donde escucha Node-RED (Railway usa la variable PORT)
    uiPort: process.env.PORT || 1880,

    // Autenticación del editor de Node-RED
    adminAuth: {
        type: "credentials",
        users: [{
            username: process.env.NODE_RED_USERNAME || "julio",
            password: process.env.NODE_RED_PASSWORD || "julio",
            permissions: "*"
        }]
    },

    // Autenticación para los endpoints HTTP (incluye /ui)
    httpNodeAuth: {
        user: process.env.NODE_RED_USERNAME || "julio",
        pass: process.env.NODE_RED_PASSWORD || "julio"
    },

    // Autenticación para archivos estáticos (si los hubiera)
    httpStaticAuth: {
        user: process.env.NODE_RED_USERNAME || "julio",
        pass: process.env.NODE_RED_PASSWORD || "julio"
    },

    // Contexto global (puedes añadir variables aquí si las necesitas)
    functionGlobalContext: {}
};
