import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Wod } from '../models/wod';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WodScraperService {

    constructor(private http: Http) { }

    private wodUrl = 'api/wods';
    private headers = new Headers({'Content-Type': 'application/json'});

    getWod(): Promise<Wod[]> {

       return this.http.get(this.wodUrl)
                .toPromise()
                .then(response => response.json().data as Wod[])
                .catch(this.handleError);
    }

    getWodsBySearchText(searchText: string = ''): Promise<Wod[]> {

        searchText = searchText.toLowerCase();

        return this.getWod().then(wods => wods.sort((left, right): number => {
            if(left.date > right.date) { return -1; }
            if(left.date < right.date) { return 1; }
        }).filter(wod => wod.date.toString().toLowerCase().indexOf(searchText) != -1 || 
                         wod.description.toLowerCase().indexOf(searchText) != -1 ||
                         wod.results.toLowerCase().indexOf(searchText) != -1 ||
                         wod.user.name.toLowerCase().indexOf(searchText) != -1 ||
                         this.getFullDateString(new Date(wod.date)).toLowerCase().indexOf(searchText) != -1));
    }

    insertWod(wod: Wod): Promise<Wod> {
        return this.http
                   .post(this.wodUrl, JSON.stringify({description: wod.description,
                                                      date: wod.date,
                                                      results: wod.results,
                                                      user: wod.user}), {headers: this.headers})
                   .toPromise()
                   .then(res => res.json().data)
                   .catch(this.handleError);
    }

    private getFullDateString(date: Date): string {
        
        let month = date.toLocaleString('en-us', { month: "long" });
        let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = weekday[date.getDay()];

        return day + " " + month + " " + date.getDate() + ", " + date.getFullYear();
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred downloading the wod', error);
        return Promise.reject(error.message || error);
    }
}