import express from 'express';

export function urls(app: express.Application) {
    app.get("/", function(req, res){
        res.render("index.html")
    })

    app.get("/page", function(req, res){
        res.render("page.html")
    })
}
