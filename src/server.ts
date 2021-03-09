import express from 'express';
import ejs from 'ejs';
import { Server } from 'typescript-rest';

export class ApiServer {
    private readonly app: express.Application;
    constructor(){
        this.app = express()

        Server.loadServices(this.app, 'controller/*', __dirname);
        
        this.app.set("views", __dirname + "/public")
        this.app.set("view engine", "ejs")
        this.app.engine("html", ejs.renderFile)

        this.app.get("/", function(req, res){
            res.render("index.html")
        })

        this.app.get("/page", function(req, res){
            res.render("page.html")
        })
        // use
        // this.app.use(express.static(path.join(__dirname, 'public')));
    }

    public async start() {
        let server = this.app.listen(8080, function(){
            console.log("server start")
        });
    }
}
