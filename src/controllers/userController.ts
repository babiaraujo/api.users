import { Request, Response } from 'express';
import { getUsers, addUser } from '../models/userModel';

export const listUsers = (req: Request, res: Response): void => {
    res.status(200).json(getUsers());
};

export const createUser = (req: Request, res: Response): void => {
    const { name, email } = req.body;
    if (!name || !email) {
        res.status(400).send('Name and email are required');
        return;
    }
    const newUser = addUser(name, email);
    res.status(201).json(newUser);
};
