import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { User } from '../models/user';
import { GamesProfile } from '../models/games-profile';
import { UserService } from '../services/user.service';

@Component({
    moduleId: module.id,
    selector: 'selector',
    styleUrls: ['about.component.css'],
    templateUrl: 'about.component.html',
    providers: [ UserService ]
})
export class AboutComponent implements OnInit {
    
    users: User[];

    constructor(private userService: UserService, private sanitizer: DomSanitizer) { }

    ngOnInit() { 
        this.userService.getUsers()
                        .then(users => this.users = users);
    }

    getSanitizedUrl(user: User): any {
        return this.sanitizer.bypassSecurityTrustStyle("url(" + user.imageUrl + ")");
    }

    getSanitizedHtml(user: User): any {
        console.log(user.gamesProfile.statsHtml);
        return this.sanitizer.bypassSecurityTrustHtml(user.gamesProfile.statsHtml);
    }
}