import * as Router from "koa-router";
import UserController from "../controller/UserController";
const router = new Router();

router.post('/signup', async (ctx, next) => {
    console.log("create user started", ctx.request.body);
    const userController = new UserController();
    let user = await userController.createUser(<User>ctx.request.body);
    ctx.body = user;
});

router.get('/', async (ctx, next) => {
    const userController = new UserController();
    // await userController.getUser(ctx);
    try {
        let users = await userController.getUsers(ctx);

        console.log('here users ' + JSON.stringify(users));
        ctx.body = users;
    } catch (err) {
        console.log("Error in getusers", err);
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
            code: ctx.status,
            msg: 'some error occured!'
        };
    }
});


router.post('/login', async (ctx, next) => {
    const userController = new UserController();
    // await userController.getUser(ctx);
    try {
        console.log(ctx.request.body, "iiiiiiiiiiiiiii");
        let response = await userController.loginUser(<LoginRequest>ctx.request.body);
        console.log('here users ' + JSON.stringify(response));
        ctx.body = response;
    } catch (err) {
        console.log("Error in getusers", err);
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
            code: ctx.status,
            msg: 'some error occured!'
        };
    }
});

// Hello world
// router.get("/getInfo", async (ctx, next) => {
//   // const data = <HelloWorld>ctx.request.body;
//   // ctx.body = { completeName: data.name };

//   const name = ctx.request.query?.name;
//   await ctx.render('./index', {
//     name: name
//   });
// });

//module.exports = router;
export default router;