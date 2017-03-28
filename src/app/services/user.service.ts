import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { User } from '../models/user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    constructor(private http: Http) { }

    private userUrl = 'api/users';
    private userStatsUrl = 'api/userStats';

    getUsers(): Promise<User[]> {
        return this.http.get(this.userUrl)
                        .toPromise()
                        .then(response => response.json().data as User[])
                        .catch(this.handleError);
    }

    getUserByName(name: string): Promise<User> {
       return this.http.get(this.userUrl)
                .toPromise()
                .then(response => response.json().data as User[])
                .then(users => users.find(user => user.name == name))
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred retrieving the user(s)', error);
        return Promise.reject(error.message || error);
    }
}