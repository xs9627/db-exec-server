export class ConnectStatus {
    public Connected: boolean;
    public Message: string;
    public Id: string;

    constructor (connected: boolean, message: string, id: string) {
        this.Connected = connected;
        this.Message = message;
        this.Id = id;
    }
}