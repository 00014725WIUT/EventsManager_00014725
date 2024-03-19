import { Component, inject } from '@angular/core';
import { Event } from '../../event.model';
import { APIService } from '../../eventservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})

export class DeleteComponent {
  deleteEvent: Event = {
    EventId: 0,
    EventName:'',
    EventDate: new Date(),
    Location: '',
    Cost:  0,
    Language: ''
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
