import express from 'express'
import { addProduct, listProduct, removeProduct, singleProduct } from '../Controllers/productControllers.js'
import upload from '../Middleware/multer.js'
import adminAuth from '../Middleware/adminAuth.js'

const productRouter = express.Router()

productRouter.post('/add', upload.single('image'), adminAuth, addProduct)
productRouter.get('/list', listProduct)
productRouter.post('/remove', adminAuth, removeProduct)
productRouter.get('/single', singleProduct)

export default productRouter