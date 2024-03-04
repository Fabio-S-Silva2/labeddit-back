import { Request, Response } from 'express';
import { UserDatabase } from '../database/UserDatabase';

export class UserController {

    async findUsers (req: Request, res: Response): Promise<void>  {

            try {
                const {name}= req.body
                const userDatabase = new UserDatabase()
                
                const result = await userDatabase.findUserById(name)
                
                res.status(200).send(result);
        
            } catch (error) {
        
                if (res.statusCode === 200) {
                    res.status(500)
                }
        
                // adicionamos um fluxo de validação do parâmetro 'error'
                if (error instanceof Error) {
                    res.send(error.message)
                } else {
                    res.send("unexpected error")
                }
            }
    
    }
}