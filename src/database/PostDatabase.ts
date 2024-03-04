import { Posts } from "../models/Posts";
import { BaseDatabase } from "./BaseDatabase";


export class PostDatabase extends BaseDatabase {
    async findPosts(id: string | undefined): Promise<Posts[]> {
        if (id) {
            const result: Posts[] = await BaseDatabase.connection("posts").where({ id })
            return result
        } else {
            const result: Posts[] = await BaseDatabase.connection("Posts")
            return result
        }

    }
}