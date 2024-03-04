import  { Request, Response } from 'express';
import { PostDatabase } from '../database/PostDatabase';

export class PostController{
    async findPost(req: Request, res: Response): Promise<void>{

        try {
            const {id} = req.params
           const postDatabse= new PostDatabase()
            const result = await postDatabse.findPosts(id)
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