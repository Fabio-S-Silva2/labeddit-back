import express from 'express';
import cors from 'cors';
import { send } from 'process';
import { Users } from './types';
import { error, log } from 'console';
import { UserDatabase } from './database/UserDatabase';
import { UserController } from './controller/UserController';



const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server running on port 3003");
});

const userController = new UserController()
// --- Get users
app.get("/users", userController.findUsers)

// --- Get posts
app.get("/posts",)
   
