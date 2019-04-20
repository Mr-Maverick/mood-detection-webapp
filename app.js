const express   = require('express')
const app       = express()
const bodyParser = require('body-parser');
const ejs       = require('ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index.ejs')
})

app.get('/video', (req,res)=>{
    url = req.query.url
    console.log(url)
    url = url.replace('watch?v=', 'embed/')
    console.log(url)
    res.render('video.ejs', {url : url})
})

app.post('/video', (req,res)=>{
    redirectLink = '/video?url=' + req.body.videoLink
    res.redirect(redirectLink)
})

app.listen(3000, () => {
    console.log('Application started at https://localhost:3000');
})