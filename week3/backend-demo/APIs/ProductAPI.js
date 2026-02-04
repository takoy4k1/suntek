//product api
import express from 'express'
import {ProductModel} from '../models/Productmodel.js'
export const productApp = express.Router()
//create express app

productApp.post('/products',async(req,res)=>{
    //getting the new product
    let newProduct=req.body
    let newProductObj=new ProductModel(newProduct)
    await newProductObj.save()
    res.status(201).json({"message":"new product created",payload:newProductObj});
})

// GET all products
productApp.get('/products',async(req,res)=>{
    let products=await ProductModel.find()
    res.status(200).json({"message":"all products data",payload:products})
})

// GET product by id
productApp.get('/products/:id',async(req,res)=>{
    let objId=req.params.id
    let product=await ProductModel.findById(objId);
    res.status(200).json({"message":"product found",payload:product})
})

// UPDATE product
productApp.put('/products/:id',async(req,res)=>{
    let objId=req.params.id;
    let newProduct=req.body;
    let updatedProduct=await ProductModel.findByIdAndUpdate(objId,newProduct,{new:true})
    res.status(200).json({"message":"product updated",payload:updatedProduct})
})

//getting the product id  using pid
productApp.get('/products/pid/:id',async(req,res)=>{
    let pid=parseInt(req.params.id);
    console.log(pid)
    let product=await ProductModel.find();
    let findProduct=product.find((prod)=>prod.pid==pid);
    console.log(findProduct);
    if(findProduct){
        res.status(200).json({"message":"product found",payload:findProduct})
    } else {
        res.status(404).json({"message":"product not found"})
    }
})
