import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:123@alura.pmkkm4x.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;