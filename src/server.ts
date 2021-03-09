import * as http from 'http';
import express from 'express';
import ejs from 'ejs';
import * as path from 'path';
import { Server } from 'typescript-rest';

export class ApiServer {
    private readonly app: express.Application;
    constructor(){
        this.app = express()

        Server.loadServices(this.app, 'controller/*', __dirname);
        // use
        this.app.use(express.static(path.join(__dirname, 'public')));
    }

    public async start() {
        let server = this.app.listen(8080, function(){
            console.log("server start")
        });
    }
}
