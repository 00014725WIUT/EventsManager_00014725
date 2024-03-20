import { Component, inject } from '@angular/core';
import { Event } from '../../event.model';
import { APIService } from '../../eventservice';
import { ActivatedRoute, Router } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatButtonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})


//--  WIUT STUDENT ID: 00014725 --//

export class DeleteComponent {
  deleteEvent: Event = {
    EventId: 0,
    EventName:'',
    EventDate: new Date(),
    Location: '',
    Cost:  0,
    Language: '',
    UserId: 0,
    User : {
      userId: 0, 
      userName: "",
      userEmail: "",
      userPhone: 0
    }
  }

  service = inject(APIService)
  activateRoute = inject(ActivatedRoute)
  router = inject(Router)

  ngOnInit(){
    this.service.getByID(this.activateRoute.snapshot.params["id"]).subscribe((result)=>{
      this.deleteEvent = result
    })
  }

  onHomeButtonClick(){
    this.router.navigateByUrl("home")
  }
  onDeleteButtonClick(id:number){
    this.service.delete(id).subscribe(r => {
      this.router.navigateByUrl("home")
    });
  }
}
