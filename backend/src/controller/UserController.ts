import UserService from "../service/UserService";

class UserController {
    userService: UserService;
    constructor() {
        this.userService = new UserService();
    }

    async getUser(ctx) {
        const name = ctx.request.query?.name;
        ctx.body = "Abhishek Sharma";
    }

    async loginUser(loginRequest: LoginRequest) {
        return await this.userService.loginUser(loginRequest);
    }

    async getUsers(ctx): Promise<Array<User>> {
        return await this.userService.getUsers();
    }

    async createUser(user: User): Promise<User> {
        return await this.userService.createUser(user);
    }
}

export default UserController;