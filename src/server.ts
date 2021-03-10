import express from 'express';
import ejs from 'ejs'
import * as path from 'path'
import { Server } from 'typescript-rest'
import { urls } from './router/urls'
import cookieParser from 'cookie-parser'
import session from 'express-session'

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
        this.app.use(session({
            // session option
            // 세션 암호화 
            secret: "1234",
            resave: false,
            // 초기화값 저장 할 것이냐
            saveUninitialized : true
        }))

        urls(this.app)
    }

    public async start() {
        let server = this.app.listen(8080, function(){
            console.log("server start")
        });
    }
}
