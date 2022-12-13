import { Router } from "express";
import { ProductManager } from "../Managers/ProductManager.js";

const manager = new ProductManager('./db/DataBase.json');
const router = Router();

router.get('/', async (req,res)=>{
    
    const products = await manager.getproducts();

    res.send({products})

});

router.post('/', async (req,res)=>{
    
    const products = await manager.addProduct();

    res.json({status: "success"})

});

export default router;