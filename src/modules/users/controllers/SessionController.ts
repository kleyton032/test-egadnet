import {Request, Response} from "express";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import authConfig from "../../../config/auth";
import User from '../services/userSchema';

class SessionController {
    public async auth(req: Request, res: Response): Promise<Response>{

        const {password} = req.body;

        const user = await User.findOne({"email": req.body.email})

        if(!user) return res.status(401).json({error:"Email/senha incorretos"});

        const confirmedPassword = await compare(password, user.password);

        if (!confirmedPassword) return res.status(401).json({error:"Email/senha incorretos"});

        const user_id = user._id;
        const token = sign({user_id}, 
            authConfig.jwt.secret, {
            expiresIn: authConfig.jwt.expiresIn, 
        })

        return res.json({user_token: {
            user : user.email,
            token
        }})

    }

}

export default SessionController;