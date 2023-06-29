import express from "express";
import morgan from "morgan";

// Router
import SimilRouter from "./routes/simil.routes";



const app = express();


// settings
app.set("port", 4000);

// middleware
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/simil",SimilRouter);


export default app;