interface Executor {
    execute(query: string): Promise<{}>;
    getTables(databaseName: string): Promise<{}>;
}

export default Executor;