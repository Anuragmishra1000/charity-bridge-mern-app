import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import cors from "cors"
import Razorpay from "razorpay"
import { connectDB } from "./config/db.js";


config({ path: "./config/config.env" })

export const app = express();

app.use(cors({
    origin:["https://deploy-mern-1whq.vercel.app"],
    methods:["POST","GET"],
    credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

app.use("/api", paymentRoute)

app.get("/api/getkey",(req,res)=>{
    res.status(200).json({key:process.env.RAZORPAY_API_KEY})
})

app.listen(process.env.PORT,()=>{
    console.log(`server is working on ${process.env.PORT}`)
})