import productModel from "../Models/productModels.js"
import {v2 as cloudinary} from 'cloudinary'

const addProduct = async(req, res) => {
try{
    const {name, price, description,category} = req.body
    const image = req.file;
    let imageURL = ""
    if(image){
        let result = await cloudinary.uploader.upload(image.path, {resource_type: 'image'}) 
            imageURL = result.secure_url
        } else{
            imageURL = "https://via.placeholder.com/150"
        }
        const productDate = {
            name,description,category, price: Number(price), image: imageURL,
            date: Date.now()
        }
        console.log(productDate);
        const product = new productModel(productDate)
        await product.save()

        res.json({success:true,message:"Product added successfully"})
        } catch(error){
    console.log("ADD PRODUCT ERROR:", error);
    res.json({success:false,message:error.message})
}

    
}


const listProduct = async(req, res) => {
    try {
        const products = await productModel.find({})
        res.json({success:true, products})
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message })
        
    }
}

const removeProduct = async(req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message:"Product removed"})    
    } catch (error) {
          console.log(error);
        res.json({success:false, message: error.message })
    }

}
const singleProduct = async(req, res) => {
}

export{addProduct, listProduct, removeProduct, singleProduct}

