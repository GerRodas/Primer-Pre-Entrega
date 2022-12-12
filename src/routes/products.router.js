import { Router } from "express";
import { producto } from "../Managers/index.js";

const router = Router();

router.get('/', async (req,res)=>{
    
    const allProducts = await producto.getproducts();

    res.send({producto: allProducts})

});

router.post('/', (req,res)=>{
    const user = req.body
    user.push(user)

    res.json({status: "success"})

});

export default router;