import { Request, Response } from "express";
import Todo from "../databases/models/todos";
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

    async find(req: Request, res: Response) : Promise<Response>{
        try {
            const todos = await Todo.findAll()

            return res.status(200).json(todos)
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error"})
        }
    };

    async findId(req: Request, res: Response) : Promise<Response>{
        try {
            const id = Number(req.params.id)
            if (isNaN(id) || id <= 0) return res.status(400).json({ Error: "Invalid id"})
      
            const todo = await Todo.findByPk(id)
            if(!todo) return res.status(404).json({ Error: "ID Not found "})
            
            return res.status(200).json(todo)
          } catch (error) {
            return res.status(500).json({ message: "Something error while findOne"})
        }
    }

    async pushData(req: Request, res: Response) : Promise<Response> {
        try {
            const { name } = req.body
            const todo = await Todo.create({ name })
      
            return res.status(200).json(todo)
          } catch (error) {
            return res.status(500).json({ message: "Something error while create todo" })
          }
    }

    async updateData(req: Request, res: Response) : Promise<Response>{
        try {
            const id: number = Number(req.params.id)
            const todoToUpdate = await Todo.findByPk(id)
            if(!todoToUpdate) return res.status(404).json({ Error: "Todo not found" })
      
            const updateTodo = req.body
            const todo = await todoToUpdate.update(updateTodo)
      
            return res.status(200).json(todo)
          } catch (error) {
            return res.status(500).json({ message: "Something error while update todo" })
        }
    }

    async deleteData(req: Request, res: Response) : Promise<Response>{
        try {
            const { id } = req.params
            const todoToDelete = await Todo.findByPk(id)
            if(!todoToDelete) return res.status(404).json({ Error: "Todo not found" })
      
            const todo = await todoToDelete.destroy()
            return res.status(200).json(todo)
          } catch (error) {
            return res.status(500).json({ message: "Something error while delete todo" })
        }
    }

}
