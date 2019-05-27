import { ISocketMessage } from '@walletconnect/types';
interface ISocketTransportOptions {
    bridge: string;
    callback: any;
}
declare class SocketTransport {
    private _bridge;
    private _socket;
    private _queue;
    private _incoming;
    private _pingInterval;
    private _callback;
    constructor(opts: ISocketTransportOptions);
    open(queuedMessages?: ISocketMessage[]): void;
    send(socketMessage: ISocketMessage): void;
    queue(socketMessage: ISocketMessage): void;
    pushIncoming(): void;
    close(): void;
    private _socketOpen;
    private _toggleSocketPing;
    private _socketSend;
    private _socketReceive;
    private _setToQueue;
    private _pushQueue;
    private _pushIncoming;
}
export default SocketTransport;
//# sourceMappingURL=socket.d.ts.map