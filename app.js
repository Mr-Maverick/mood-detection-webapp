const express   = require('express')
const app       = express()
const http      = require('http').Server(app);
const bodyParser = require('body-parser');
const ejs       = require('ejs');
const io        = require('socket.io')(8080);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.set('view engine', 'ejs');
app.use(express.static('public_static'))

app.get('/', (req,res) => {
    res.render('index.ejs')
})

app.get('/localVideo', (req,res) => {
    res.render('localVideo.ejs')
})

app.get('/video', (req,res)=>{
    url = req.query.url
    url = url.replace('watch?v=', 'embed/')
    url = url + '?enablejsapi=1'
    res.render('video.ejs', {url : url})
})

app.post('/video', (req,res)=>{
    redirectLink = '/video?url=' + req.body.videoLink
    res.redirect(redirectLink)
})

io.on('connection', socket => {
    socket.on('keyApp', msg => {
        io.emit('keyHtml', msg);
    });
    socket.on('keyApp2', msg => {
        io.emit('keyHtml2', msg);
    });
  });
  
http.listen(3000, () => {
    console.log('Application started at https://localhost:3000');
})