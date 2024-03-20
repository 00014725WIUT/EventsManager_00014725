import { Component, inject} from '@angular/core';
import {Event} from '../../event.model'
import { APIService } from '../../eventservice';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ApiService=inject(APIService); 
  router = inject(Router)
  events: Event [] = [];
  activatedRoute = ActivatedRoute;

  displayedColumns: string[] = ['ID', 'Event Name', 'Event Date', 'Location', 'User Name','Cost', 'Language', 'Actions'];


  ngOnInit() {
    this.ApiService.getAll().subscribe((result) => {
      this.events = result
    }); 
  }

  EditClicked(eventId:number) {
    console.log(eventId, "From Edit");
    this.router.navigateByUrl("/edit/" + eventId)
  };

  DeleteClicked(eventId:number) {
    console.log(eventId, "From Delete");
    this.router.navigateByUrl("/delete/" + eventId)
  };

  DetailsClicked(eventId:number){
    console.log(eventId, "From Details");
    this.router.navigateByUrl("/details/"+ eventId);
  };
}


//--  WIUT STUDENT ID: 00014725 --//