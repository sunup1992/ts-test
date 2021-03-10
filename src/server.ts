import express from 'express';
import ejs from 'ejs';
import * as path from 'path';
import { Server } from 'typescript-rest';

export class ApiServer {
    private readonly app: express.Application;
    constructor(){
        this.app = express()

        Server.loadServices(this.app, 'controller/*', __dirname);
        
        this.app.set("views", __dirname + "/views")
        this.app.set("view engine", "ejs")
        this.app.engine("ejs", ejs.renderFile)

        this.app.use(express.static(path.join(__dirname, 'common')));

        this.app.get("/", function(req, res){
            let date = new Date()
            let param = {
                "page_title": "default page",
                "time": date
            }

            res.render("index.ejs", param)
        })

        this.app.get("/page", function(req, res){
            res.render("page.ejs")
        })

    }

    public async start() {
        let server = this.app.listen(8080, function(){
            console.log("server start")
        });
    }
}
