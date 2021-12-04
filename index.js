// const express = require("express");
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
const app = express();
const PORT = process.env.PORT || 6000;



// Opened Connection to DB, movieData - db name
const url =`mongodb+srv://prasanna:prasanna98@cluster0.nx947.mongodb.net/myFirstDatabase`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const con = mongoose.connection;
con.on("open", () => console.log("MongoDB is connected"));

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("Welcome to Pinterest Clone App!!!!");
});

app.use("/users", userRouter);

app.listen(PORT, () => console.log("The server is started in " + PORT));
