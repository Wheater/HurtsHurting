import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Workout of the Day';
  searchText = '';
  loading: boolean = false;

  constructor(private router: Router) { }

  onEnterKey(): void{
    this.router.navigate(['/wod/' + this.searchText]);
  }

  onMobileSearchClick(event): void {
    event.preventDefault();
  }
}
