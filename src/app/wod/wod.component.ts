import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MdDialog, MdDialogRef } from '@angular/material';
import 'rxjs/add/operator/switchMap';
import { Wod } from '../models/wod';
import { User } from '../models/user';
import { WodScraperService } from '../services/wod-scraper.service';
import { MediaUploadDialogComponent } from './media-upload-dialog.component';
import { DroppableDirective } from '../drag-and-drop/droppable.directive';

@Component({
    moduleId: module.id,
    selector: 'wod',
    templateUrl: './wod.component.html',
    styleUrls: ['./wod.component.css'],
    providers: [ WodScraperService ]
})

export class WodComponent implements OnInit {

    constructor(private wodScraperService: WodScraperService, private route: ActivatedRoute, private sanitizer: DomSanitizer, public dialog: MdDialog) { }

    wods: Wod[];

    openMediaUploadDialog() {
        let dialogRef = this.dialog.open(MediaUploadDialogComponent)
    }

    ngOnInit() { 
        this.route.params
                  .switchMap((params: Params) => this.wodScraperService.getWodsBySearchText(params['searchText']))
                  .subscribe((wods => this.wods = wods));
    }

    getSanitizedUrl(user: User): any {
        return this.sanitizer.bypassSecurityTrustStyle("url(" + user.imageUrl + ")");
    }
}   

