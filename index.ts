import express, {Request, Response} from "express";
import ITodos from "./interface/Todos";
import Todos from "./src/mocks/Todos";
 

const app = express()
const PORT = 5000

app.use(express.json())

app.get("/", (req: Request, res: Response) : Response => {
    return res.status(200).json({message: "Connection OK"})
});

//json({data: Todos} untuk menampilkan data json
app.get("/todos", (req: Request, res: Response) => {
    return res.status(200).json({data: Todos})
});

app.get("/todos/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    
    //filter data agar yang ditampilkan sesuai id
    const data = Todos.find((data) => data.id === id)

    return res.status(200).json({data})
})


//menambahkan data dengan method post, dan menggunakan push
app.post('/todos', (req: Request, res: Response) => {
    const data: ITodos = req.body;
    Todos.push(data);

    return res.status(200).json({data: Todos})
})

//mendelete data
app.delete("/todos/:id", (req: Request, res: Response) => {
    const { id } = req.params
    const data: ITodos[] =  Todos.filter(todo => todo.id !== parseInt(id))

    return res.status(200).json(data)
})

//Void di promise menunjukkan tidak membutuhkan nilai return
async function start(): Promise<void> {
    try {
        app.listen(PORT, () => console.log("Server Express Running"))
    } catch (error) {
        console.log("Server Error")
        process.exit(1)
    }
}

void start();
