import express from 'express';
import bodyParser from 'body-parser'

let urlEncodedParser = bodyParser.urlencoded({extended : false })

export function urls(app: express.Application) {
    app.get("/", function(req, res){
        let date = new Date()
        let param = {
            "page_title": "default page",
            "time": date
        }

        res.render("index.ejs", param)
    })

    app.get("/page", function(req, res){
        let param = {
            name : req.query.first_data,
            title_name : req.query.second_data
        }
        
        res.render("page.ejs", param)
    })

    app.post("/page", urlEncodedParser, function(req, res){
        let param = {
            name : req.body.first_data,
            title_name : req.body.second_data
        }

        res.render("page.ejs", param)
    })
}
