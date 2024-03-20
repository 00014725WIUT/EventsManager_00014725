import { Component, inject } from '@angular/core';
import {Event} from '../../event.model'
import { APIService } from '../../eventservice';
import { ActivatedRoute } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips'
import { MatCardModule } from '@angular/material/card';

//--  WIUT STUDENT ID: 00014725 --//

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  details: Event = {
    EventId: 0,
    EventName: '',
    EventDate: new Date(),
    Location: '',
    Cost: 0,
    Language: '',
    UserId: 0,
    User : {
      userId: 0,
      userName: "",
      userEmail: "",
      userPhone: 0
    }
  };

  APIservice = inject(APIService)
  activatedRoute = inject(ActivatedRoute)

  ngOnInit(){
    this.APIservice.getByID(this.activatedRoute.snapshot.params["id"]).subscribe((result) =>{ 
      this.details = result
    });
  }
}
