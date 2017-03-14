//import sql = require('mssql');
import Executor from './Executor';
import * as sql from 'mssql';

class MSSqlExecutor implements Executor {
    constructor () {

    }

    public execute(query: string) {
        return new Promise((resolve, reject) => {
            var connection = new sql.Connection({
                user: 'sa',
                password: 'Active@111',
                server: 'localhost',
                database: ''
            });
            connection.connect().then(function() {
                console.log('connect success');
                new sql.Request(connection)
                .query<any>(query)
                .then(function(recordset) {
                    //console.dir(recordset);
                    resolve(recordset);
                })
                .catch(function(err){
                    console.log(err);
                    resolve(err);
                });
            })
            .catch(function(err){
                console.log('connect error');
                resolve(err);
            });
        });
        
    }

    public getTables(databaseName: string) {
        let query = `select * from ${databaseName}.sys.tables`;
        return this.execute(query);
    }
}

export default MSSqlExecutor;