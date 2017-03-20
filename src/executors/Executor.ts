import { ConnectStatus } from "../domain/ConnectStatus";

interface Executor {
    connect(server: string, user: string, password: string): Promise<ConnectStatus>;
    execute(query: string): Promise<{}>;
    getTables(databaseName: string): Promise<{}>;
}

export default Executor;