import {Router, Request, Response, NextFunction} from 'express';
import ExecutorFactory from '../executors/ExecutorFactory'

export class ConnectionRouter {
    router: Router

    constructor() {
        this.router = Router();
        this.init();
    }

    public getConnection(req: Request, res: Response, next: NextFunction) {
        let server = req.params.server;
        let user = req.params.user;
        let password = req.params.password;
        ExecutorFactory.executor.connect(server, user, password)
        .then(function(status){
            res.send(status);
        });
    }

    init() {
        this.router.get('/:server/:user/:password', this.getConnection);
    }
}

const connectionRouter = new ConnectionRouter();
connectionRouter.init();

export default connectionRouter.router;