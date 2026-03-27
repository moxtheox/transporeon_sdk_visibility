
export class BasicAuth {


    constructor(public companyId: string,
        public userName: string,
        public password: string) {
        
    }

    public getAuthHeader(): string {
        return 'Basic ' + Buffer.from(`${this.userName}@${this.companyId}:${this.password}`,'utf-8').toString('base64');
    }

    static sandBoxAuth(): string {
        return 'Basic ' + Buffer.from('demo@123:demo').toString('base64');
    }
}