import { Component, inject } from '@angular/core';
import {Event} from '../../event.model'
import { APIService } from '../../eventservice';
import { ActivatedRoute, Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


function findIndexByID(jsonArray: any[], indexToFind: number): number {
  return jsonArray.findIndex((item) => item.id === indexToFind);
}


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
    serv = inject(APIService);
    activatedRoute = inject(ActivatedRoute);
    router = inject(Router)
    
    editEvent: Event = {
      EventId: 0,
      EventName: "",
      EventDate: new Date(),
      Location: "",
      Cost: 0,
      Language: "",
      UserId: 0,
      User : {
        userName: "",
        userEmail: "",
        userPhone: 0
      }
    }
    userCategory: any;
    cID: number = 0;
    selected: any

    

    ngOnInit() {
      console.log(this.activatedRoute.snapshot.params["id"])
      this.serv.getByID(this.activatedRoute.snapshot.params["id"]).subscribe(result =>{
          this.editEvent = result;
          console.log(this.editEvent)
          this.selected = this.editEvent.UserId
      })

      this.serv.getAllUsers().subscribe((result) => {
        this.userCategory = result;
      });
    }

    toHome() {
      this.router.navigateByUrl("home")
    }

    edit(){
      this.editEvent.UserId = this.cID;
      this.editEvent.User = this.userCategory[findIndexByID(this.userCategory, this.cID)];
      this.serv.edit(this.editEvent).subscribe(res => {
        alert("Changes has been updated")
        this.router.navigateByUrl("home")
      })
    }
}
