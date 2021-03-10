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

    app.get("/save_cookie", function(req, res){
        var op = {
            // 쿠키 유효시간 : 이건 1시간
            maxAge : 60 * 60
        }

        res.cookie("cookie1", "test cookie", op)

        res.render("save_cookie.ejs")
    })

    app.get("/load_cookie", function(req, res){
        let cookie_data = {
            cookie1 : req.cookies.cookie1
        }

        res.render("load_cookie.ejs", cookie_data)
    })

    app.get("/save_session", function(req, res){
       
        res.render("save_cookie.ejs")
    })

    app.get("/load_cookie", function(req, res){
        let cookie_data = {
            cookie1 : req.cookies.cookie1
        }

        res.render("load_cookie.ejs", cookie_data)
    })
}
