const path = require('path');

module.exports = {
    // outras configurações do webpack aqui...

    resolve: {
        fallback: {
            "crypto": false
        }
    }
};