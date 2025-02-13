import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rakesh:9763348661@cluster0.uptd6.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}