import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/add/operator/switchMap';
import { Wod } from '../models/wod';
import { User } from '../models/user';
import { WodScraperService } from '../services/wod-scraper.service';

@Component({
    moduleId: module.id,
    selector: 'wod',
    templateUrl: './wod.component.html',
    styleUrls: ['./wod.component.css'],
    providers: [WodScraperService]
})

export class WodComponent implements OnInit {

    constructor(private wodScraperService: WodScraperService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

    wods: Wod[];

    ngOnInit() { 
        this.route.params
                  .switchMap((params: Params) => this.wodScraperService.getWodsBySearchText(params['searchText']))
                  .subscribe((wods => this.wods = wods));
    }

    getSanitizedUrl(user: User): any {
        return this.sanitizer.bypassSecurityTrustStyle("url(" + user.imageUrl + ")");
    }
}   