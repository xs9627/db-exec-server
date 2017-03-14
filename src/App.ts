import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import TableRouter from './routes/TableRouter';
import QueryRouter from './routes/QueryRouter';

// Creates and configures an ExpressJS web server.
class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false}));
    }

    private routes(): void {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello Sonic!'
            });
        });
        this.express.use('/', router);
        this.express.use('/api/v1/tables', TableRouter);
        this.express.use('/api/v1/query', QueryRouter);
    }
}

export default new App().express;