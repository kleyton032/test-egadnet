import {Request, Response, NextFunction} from "express"
import {hash} from "bcryptjs";
import User from '../services/userSchema';

class UserController {

    public async createUser(req: Request, res: Response, next: NextFunction ): Promise<Response>{

        const { name, email, password} = req.body;

        if (!name || !email || !password ) return res.status(422).json({ error: "Preencha todos os campos para o cadastro." });

        const hash_password = await hash(password, 8);

        const user = await new User({
            name,
            email, 
            password: hash_password        
        });

        const userExits = await User.findOne({"email": req.body.email});

        if(userExits) return res.status(400).send({error: "E-mail já castrado"});

        await user.save();
       
        return res.json(user);   

    }
}

export default UserController;