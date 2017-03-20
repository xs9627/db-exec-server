import {Router, Request, Response, NextFunction} from 'express';
import ExecutorFactory from '../executors/ExecutorFactory'

let tables = [{name: 'add_members'}];

export class QueryRouter {
    router: Router

    constructor() {
        this.router = Router();
        this.init();
    }

    public getAll(req: Request, res: Response, next: NextFunction) {
        let command = req.body.command;
        //console.log(req);
        ExecutorFactory.executor.execute(command)
        .then(function(data){
            console.log(data);
            res.send(data);
        })
        .catch(function(err){
            res.send(err);
        });
    }


    init() {
        this.router.post('/', this.getAll);
    }
}

const queryRoutes = new QueryRouter();
queryRoutes.init();

export default queryRoutes.router;