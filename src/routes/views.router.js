import express from 'express';
import { producto } from '../Managers/index.js';

const router = express.Router();

router.get('/', async(req,res)=>{
    const products = await producto.getproducts();
    res.render('index',{products});
})

router.get("/realtimeproducts", (req,res)=>{
    res.render("realTimeProducts")
});

export default router;