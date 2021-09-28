const express = require("express");
require('dotenv').config();
const initRoutes = require("./API/Routes/AllRoutes");

class Server {
    constructor() {
        this.app = new express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    initApp() {
        initRoutes(this.app);
    }

    serverListeningMode() {
        this.app.listen(process.env.PORT, callback);
        function callback(request, response) {
            console.log(`tap this link to access the server functionality :- http://localhost:${process.env.PORT} `);
        }
    }
}

function main() {
    const server = new Server();
    server.serverListeningMode();
    server.initApp();
}

main();
