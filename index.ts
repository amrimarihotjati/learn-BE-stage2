import express, {Request, Response} from "express";
import router from "./src/routes";
import dotenv from "dotenv";
 

//Void di promise menunjukkan tidak membutuhkan nilai return
async function start(): Promise<void> {
    try {
        dotenv.config()
        
        const app = express()
        const PORT = process.env.APP_PORT

        app.use(express.json())
        app.use("/api/v1", router)

        app.listen(PORT, () => console.log("Server Express Running"))
    } catch (error) {
        console.log("Server Error")
        process.exit(1)
    }
}

void start();
