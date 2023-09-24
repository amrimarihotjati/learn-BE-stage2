import TodosServices from "../service/TodosServices"
import { Request, Response } from "express"


export default new class TodosControllers {
    find(req: Request, res: Response){
        TodosServices.find(req, res)
    }

    findId(req: Request, res: Response){
        TodosServices.findId(req, res)
    };

    pushData(req: Request, res: Response){
        TodosServices.pushData(req, res)
    };

    deleteData(req: Request, res: Response){
        TodosServices.deleteData(req,res)
    };

    updateData(req: Request, res: Response){
        TodosServices.updateData(req, res)
    }

    home(req: Request, res: Response){
        TodosServices.home(req, res)
    };

    
}