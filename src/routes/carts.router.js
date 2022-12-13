import { Router } from "express";
import { CartManager } from "../Managers/CartManager.js";

const manager = new CartManager('./db/CartBase.json');
const router = Router();

router.get('/', async (req,res)=>{

    const carts = await manager.getCart();

    res.send({carts})
})

router.post('/', (req,res)=>{
    const cart = req.body
    carts.push(cart)

    res.json({status: "success"})

})

export default router;