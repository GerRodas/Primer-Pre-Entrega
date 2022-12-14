import express from 'express'

import productsRouter from './routes/products.router.js'
import cartsRouter from './routes/carts.router.js'
import Handlebars from 'handlebars';
import { Server } from 'socket.io';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/',(req,res) => res.send('ESTA ES LA PAGINA PARA COMPRAR COSITAS'));

app.listen(8080);
