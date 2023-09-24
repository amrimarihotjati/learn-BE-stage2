import express, {Request, Response} from "express";
import router from "./src/routes";
import ITodos from "./src/interface/Todos";
import Todos from "./src/mocks/Todos";
 

const app = express()
const PORT = 5000

app.use(express.json())

//Void di promise menunjukkan tidak membutuhkan nilai return
async function start(): Promise<void> {
    try {
        app.use("/api/v1", router)
        app.listen(PORT, () => console.log("Server Express Running"))
    } catch (error) {
        console.log("Server Error")
        process.exit(1)
    }
}

void start();
