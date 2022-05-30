import {Request, Response} from "express";
import GetCep from "../service/getCep";

class GetCepController {

    public async index(req: Request, res:Response): Promise<Response>{
        
        const {cep} = req.body;

        const getResult = new GetCep();    

        const get = await getResult.execute(cep);
        
        console.log(cep);

        return res.json(get)

    }
    

}

export default GetCepController;