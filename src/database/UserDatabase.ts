import { promises } from "dns";
import { Users} from "../types";
import { BaseDatabase } from "./BaseDatabase";
import { User } from "../models/User";

export class UserDatabase extends BaseDatabase {


    async findUsers(name: string): Promise<User[]> {
        if (name) {
            const result: User[] = await BaseDatabase.connection("users").where("name", "LIKE", `%${name}%`)
            return result
        } else {
            const result: User[] = await BaseDatabase.connection("users")
            return result
        }
    }

    async findUserById(id: string): Promise<User | undefined> {
        const [result] = await BaseDatabase.connection("users").where({ id })
        return result
    }

    async insertUser(user: User): Promise<void> {
        await BaseDatabase.connection("users").insert(
            {
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                created_at: user.getCreatedAt()
            }
        )
    }
}