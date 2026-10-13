import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rakesh:9763348661@cluster0.uptd6.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}

// mongodb://rakesh:9763348661@cluster0-shard-00-00.uptd6.mongodb.net:27017,cluster0-shard-00-01.uptd6.mongodb.net:27017,cluster0-shard-00-02.uptd6.mongodb.net:27017/food-del?ssl=true&replicaSet=atlas-sfcne6-shard-0&authSource=admin&appName=Cluster0