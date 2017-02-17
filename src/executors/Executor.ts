interface Executor {
    execute(query: string): Promise<{}>;
}

export default Executor;