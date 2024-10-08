import express from 'express';
import { getAllUsers, createUser, searchUsers, updateUser, deleteUserByEmail, exportUsers } from '../controllers/user.controllers';

const userRouter = express.Router()

// Route to get all users
userRouter.get('/getAllUsers', getAllUsers);
userRouter.post('/createUser', createUser);
userRouter.patch('/updateUser', updateUser);
userRouter.get('/searchUser/:text', searchUsers);
userRouter.delete("/deleteUser", deleteUserByEmail);
userRouter.get('/export', exportUsers);

export default userRouter;
