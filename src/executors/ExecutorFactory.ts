import Executor from './Executor';
import MSSqlExecutor from './MSSqlExecutor';

export default class ExecutorFactory {
    constructor () {
        throw new Error("Cannot new this class");

    }
    static executor = new MSSqlExecutor();
    // static getExecutor (): Executor {
    //     return executor;
    // }
}