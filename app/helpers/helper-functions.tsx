import { UserFactory } from "./factory";

export const createUsersDataBasedOnAPI = (users: array) => {
    const UserFactoryObj = UserFactory;
    const userData = users.map(user => {
        return new UserFactoryObj(user);
    })

    return userData;
};