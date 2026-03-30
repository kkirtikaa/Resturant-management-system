import express from 'express'
import cors from "cors"
import 'dotenv/config'
import connectDB from './Config/mongodb.js'
import connectCloudinary from './Config/cloudinary.js'
import userRouter from './Routes/userRoute.js'
import productRouter from './Routes/productRoute.js'
import reservationRoute from './Routes/reservationRoute.js'

const app = express()

const port = process.env.PORT || 4000

connectDB()
connectCloudinary()

app.use(cors())
app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/reservations', reservationRoute)

app.get('/',(req,res) => {
    res.send("API working")
})

app.listen(port, ()=> console.log('Server started on port ' + port))