module.exports = {
    uiPort: process.env.PORT || 1880,
    uiHost: "0.0.0.0",

    adminAuth: null,
    httpNodeAuth: null,
    httpStaticAuth: null,

    // Sobrescribe la raíz con un directorio vacío
    httpStatic: 'empty',

    // Editor oculto
    editorTheme: {
        editorPath: "/julio"
    },

    functionGlobalContext: {}
};
