import express from 'express';
import { getAllUsers, createUser, searchUsers, updateUser, deleteUserByEmail, exportUsers, login, logout, loginWithGoogle, getOneUser } from '../controllers/user.controllers';
import { authMiddleware } from '../middlewares/middel'


const userRouter = express.Router()


userRouter.post('/createUser', createUser);
userRouter.post('/login', login);
userRouter.post('/logout', logout);
userRouter.post('/loginWithGoogle', loginWithGoogle);

userRouter.get('/getAllUsers', authMiddleware, getAllUsers);
userRouter.patch('/updateUser', authMiddleware, updateUser);
userRouter.get('/searchUser/:text', authMiddleware, searchUsers);
userRouter.delete("/deleteUser/:email", authMiddleware, deleteUserByEmail);
userRouter.get('/export', authMiddleware, exportUsers);
userRouter.get('/revalidate', authMiddleware, getOneUser);


export default userRouter;
