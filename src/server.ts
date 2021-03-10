import express from 'express';
import ejs from 'ejs';
import * as path from 'path';
import { Server } from 'typescript-rest';
import { urls } from './router/urls'
import cookieParser from 'cookie-parser'


export class ApiServer {
    private readonly app: express.Application;
    constructor(){
        this.app = express()

        Server.loadServices(this.app, 'controller/*', __dirname);
        
        this.app.set("views", __dirname + "/views")
        this.app.set("view engine", "ejs")
        this.app.engine("ejs", ejs.renderFile)

        this.app.use(express.static(path.join(__dirname, 'common')));
        
        this.app.use(cookieParser())
        
        urls(this.app)
    }

    public async start() {
        let server = this.app.listen(8080, function(){
            console.log("server start")
        });
    }
}
