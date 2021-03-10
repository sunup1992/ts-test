import express from 'express';

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
        res.render("page.ejs")
    })
}
