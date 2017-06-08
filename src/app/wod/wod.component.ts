import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MdDialog, MdDialogRef } from '@angular/material';
import 'rxjs/add/operator/switchMap';
import { Wod } from '../models/wod';
import { User } from '../models/user';
import { WodScraperService } from '../services/wod-scraper.service';
import { DroppableDirective } from '../drag-and-drop/droppable.directive';

@Component({
    moduleId: module.id,
    selector: 'wod',
    templateUrl: './wod.component.html',
    styleUrls: ['./wod.component.css'],
    providers: [ WodScraperService ]
})

export class WodComponent implements OnInit {

    constructor(private wodScraperService: WodScraperService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

    wods: Wod[];

    ngOnInit() { 
        this.route.params
                  .switchMap((params: Params) => this.wodScraperService.getWodsBySearchText(params['searchText']))
                  .subscribe((wods => this.wods = wods));
    }

    onFilesDropped(fileList: FileList, wod: Wod){
        //restructure file list to be a normal array instead of FileList
        //because FileLists are readonly and subsequent file drops will not 
        //be able to be added to the list
        if(!this.getWodFromWodList(wod).fileList){
            this.getWodFromWodList(wod).fileList = [];
        }

        for(let i = 0; i < fileList.length; i++){
            this.getWodFromWodList(wod).fileList.push(fileList.item(i));
        }
    }

    removeItemFromFileList(wod: Wod, file: File, index: number){
        var fileList = this.getWodFromWodList(wod).fileList;

       fileList.splice(index, 1);

        this.getWodFromWodList(wod).fileList = fileList;
    }

    getObjectUrl(file: File): any{
        return this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
    }

    getSanitizedUrl(user: User): any {
        return this.sanitizer.bypassSecurityTrustStyle("url(" + user.imageUrl + ")");
    }

    getWodFromWodList(wod: Wod): Wod {
        return this.wods.find(w => w.description == wod.description && w.results == wod.results)
    }
}   

