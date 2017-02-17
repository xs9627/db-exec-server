import Executor from './Executor';
import MSSqlExecutor from './MSSqlExecutor';

class ExecutorFactory {
    public getExecutor (): Executor {
        return new MSSqlExecutor();
    }
}

export default new ExecutorFactory();