import express from 'express'
import handlebars from 'express-handlebars';
import __dirname from '../src/utils.js';
import viewsRouter from './routes/views.router.js'
import productsRouter from './routes/products.router.js'
import cartsRouter from './routes/carts.router.js'
import { Server } from 'socket.io';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const httpServer = app.listen(8080, () => console.log("Listening on PORT 8080"));
const socketServer = new Server(httpServer);

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname+'/views');
app.set('view engine','handlebars');
app.use(express.static(__dirname+'/public'));

app.use('/',viewsRouter);

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);


socketServer.on('connection', socket=>{
    console.log("Nuevo cliente conectado")
    socket.on('message', data=>{
        console.log(data);

    })
})

