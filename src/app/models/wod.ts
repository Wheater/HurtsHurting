import { User } from './user';

export class Wod {

    constructor(description: string, results: string, user: User, date: Date){ 
        this.description = description;
        this.results = results;
        this.user = user;
        this.date = date;
        this.fileList = [];
    }

    title: string;
    date: Date;
    description: string;
    results: string;
    user: User;
    fileList: any[];
}

export class InMemoryWodShell {
    id: Number;
    wod: Wod;
}