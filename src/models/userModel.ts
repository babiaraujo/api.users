export interface User {
    id: number;
    name: string;
    email: string;
}

let users: User[] = [];
let currentId = 1;

export const getUsers = (): User[] => users;

export const addUser = (name: string, email: string): User => {
    const newUser = { id: currentId++, name, email };
    users.push(newUser);
    return newUser;
};
