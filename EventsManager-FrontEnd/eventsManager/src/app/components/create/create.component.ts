import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../../eventservice';
import {Event} from '../../event.model'
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatButtonModule, MatInputModule,MatSelectModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  ApiService = inject(APIService)
  router = inject(Router)
  use: any;
  cID: number = 0
  
  createEvent: Event = {
    EventId: 0,
    EventName: '',
    EventDate: new Date(),
    Location: '',
    Cost: 0,
    Language: '',
    UserId: 0,
    User : {
      userName: "",
      userEmail: "",
      userPhone: 0
    }
  };

  ngOnInit(){
      this.ApiService.getAllUsers().subscribe((result) => {
        this.use = result
      })
  }

  create() {
    this.createEvent.UserId = this.cID;
    this.ApiService.create(this.createEvent).subscribe(result =>{
      alert("Event Saved")
      this.router.navigateByUrl("home")
    })
  }
}
