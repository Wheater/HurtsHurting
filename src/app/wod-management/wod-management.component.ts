import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';

import { Wod } from '../models/wod';
import { User } from '../models/user';
import { WodScraperService } from '../services/wod-scraper.service';
import { UserService } from '../services/user.service';

@Component({
    moduleId: module.id,
    selector: 'wod-management',
    templateUrl: 'wod-management.component.html',
    styleUrls: ['wod-management.component.css']
})

export class WodManagementComponent implements OnInit {

    wodForm: FormGroup;
    users: User[];
    placeholderDate: Date = new Date();

    constructor(private wodScraperService: WodScraperService, private formBuilder: FormBuilder, private userService: UserService, private snackBar: MdSnackBar) { 
        this.createForm();
    }

    createForm(): void {
        this.wodForm = this.formBuilder.group({
            date: [new Date(), Validators.required],
            description: ['', Validators.required],
            results: ['', Validators.required],
            user: [null, Validators.required]
        });
    };

    ngOnInit() { 
        this.userService.getUsers()
                        .then(users => this.users = users);
    }

    getWodFromForm(): Wod {

        return new Wod(this.wodForm.get('description').value, 
                       this.wodForm.get('results').value, 
                       this.wodForm.get('user').value, 
                       this.wodForm.get('date').value);
    }

    insertWod(): void {   
        this.wodScraperService.insertWod(this.getWodFromForm())
                              .then(wod => {
                                  this.openSnackBar(null, true, wod);
                                  this.wodForm.reset();
                              });
    }

    openSnackBar(error: any, success: boolean, wod?: Wod): Promise<any> {

        if(success){
            let snackBarRef = this.snackBar.open('WOD entry created', null, {
                duration: 1000
            });

            return Promise.resolve();
        } else {
            let snackBarRef = this.snackBar.open('Error creating wod', null, {
                duration: 1000
            });

            return Promise.reject("Error creating wod");
        }

        
    }
}