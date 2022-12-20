import express from 'express'
import handlebars from 'express-handlebars';
import __dirname from '../src/utils.js';
import viewsRouter from './routes/views.router.js'
import productsRouter from './routes/products.router.js'
import cartsRouter from './routes/carts.router.js'
import {Server as httpServer} from 'http'
import { Server as IOServer } from 'socket.io';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const httpServe = new httpServer(app);
const io = new IOServer(httpServe)

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname+'/views');


app.set('view engine','handlebars');
app.use(express.static(__dirname+'/public'));

app.get("/", (req,res)=>{
    res.render("index")
})

app.use('/',viewsRouter);

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

const Server = httpServe.listen(8080, () => console.log("Servidor corriendo en el puerto 8080"));

Server.on("error", (error)=>{
    console.log(error);
})

io.on('connection', (socket)=>{
    console.log(`Nuevo cliente conectado, id: ${socket.id}`)

    io.sockets.emit("hello", "HOLA!")

    })

