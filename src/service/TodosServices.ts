import { Request, Response } from "express";
import ITodos from "../interface/Todos";
import Todos from "../mocks/Todos";

//Untuk inilisiasi 
export default new class TodosServices {

    // membuat array kosong, dimana nilai todos menjadi kosong
    private todos: ITodos[];

    // mengisi nilai todos agar sesuai dengan data di mocks, fungsi ... adalah agar isi data sesuai dengan sebelumnya
    constructor() {
        this.todos = [ ...Todos]
    }

    home(req: Request, res: Response) : Response{
        try {
            return res.status(200).json({message: "Connection OK"})
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error"})
        }
    }

    find(req: Request, res: Response) : Response{
        try {
            return res.status(200).json(this.todos)
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error"})
        }
    };

    findId(req: Request, res: Response) : Response{
        try {
            const id = parseInt(req.params.id)
    
            //filter data agar yang ditampilkan sesuai id
            const data = Todos.find((data) => data.id === id)
        
            return res.status(200).json({data})
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error"})
        }
    }

    pushData(req: Request, res: Response) : Response {
        try {
            const data: ITodos = req.body;
            Todos.push(data);
        
            return res.status(200).json({data: Todos})
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error"})
        }
    }

    updateData(req: Request, res: Response) : Response{
        try {
            const id: number = Number(req.params.id)
            const updateTodo: ITodos = req.body;

            const index: number = this.todos.findIndex(todo => todo.id === id)

            if(index !== 1){
                this.todos[index] ={ ...this.todos[index], ...updateTodo}
                const data = this.todos[index]
                return res.status(200).json(data)
            }

            return res.status(404).json({message : "ID Todos not Found"})

        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error"})
        }
    }

    deleteData(req: Request, res: Response) : Response{
        try {
            const { id } = req.params
            const data: ITodos[] =  Todos.filter(todo => todo.id !== parseInt(id))
        
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error"})
        }
    }

}
