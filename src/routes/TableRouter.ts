import {Router, Request, Response, NextFunction} from 'express';
//import sql = require('mssql');
import * as sql from 'mssql';

let tables = [{name: 'add_members'}];

export class TableRouter {
    router: Router

    constructor() {
        this.router = Router();
        this.init();
    }

    public getAll(req: Request, res: Response, next: NextFunction) {
        var connection = new sql.Connection({
            user: 'sa',
            password: 'Active@111',
            server: 'localhost',
            database: ''
        });
        connection.connect().then(function() {
            console.log('connect success');
            new sql.Request(connection)
            .query('select * from membership_service.sys.tables')
            .then(function(recordset) {
                console.dir(recordset);
                res.send(recordset);
            })
            .catch(function(err){
                console.log(err);
            });
        })
        .catch(function(err){
            console.log('connect error');
        });
    }

    public getOne(req: Request, res: Response, next: NextFunction) {
        let query = req.params.name;
        let table = tables.find(table => table.name === query);
        if (table) {
            res.status(200)
            .send({
                message: 'Success',
                status: res.status,
                table
            });
        }
        else {
            res.status(404)
            .send({
                message: 'No table find with the given name.',
                status: res.status
            });
        }
    }

    init() {
        this.router.get('/', this.getAll);
        this.router.get('/:name', this.getOne);
    }
}

const tableRoutes = new TableRouter();
tableRoutes.init();

export default tableRoutes.router;